import { Component, inject, signal, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { FoodListingService } from '../../services/food-listing.service';
import { CartService } from '../../services/cart.service';
import { AuthService } from '../../services/auth.service';
import { FoodListing } from '../../models/food-listing.model';

@Component({
    selector: 'app-payment',
    standalone: true,
    imports: [FormsModule, ButtonModule, InputTextModule, InputMaskModule, RouterLink],
    templateUrl: './payment.component.html',
    styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);
    private location = inject(Location);
    private listingService = inject(FoodListingService);
    private cartService = inject(CartService);
    private auth = inject(AuthService);

    cartItems = signal<FoodListing[]>([]);
    deliveryAddress = signal<string>('');

    // Payment Form Model
    cardName = '';
    cardNumber = '';
    expiryDate = '';
    cvv = '';

    isProcessing = signal(false);
    isSuccess = signal(false);

    // Example fee
    serviceFee = 24.99;

    ngOnInit() {
        const idParam = this.route.snapshot.paramMap.get('id');

        if (idParam === 'cart') {
            const items = this.cartService.cartItems();
            if (items.length > 0) {
                this.cartItems.set([...items]);
            } else {
                this.router.navigate(['/ilanlar']);
            }
        } else if (idParam) {
            const listingObj = this.listingService.allListings().find(l => l.id === Number(idParam));
            if (listingObj) {
                this.cartItems.set([listingObj]);
            } else {
                this.router.navigate(['/ilanlar']);
            }
        } else {
            this.router.navigate(['/ilanlar']);
        }

        // Attempt to get delivery address from router state
        const state = this.location.getState() as any;
        if (state && state.deliveryAddress) {
            this.deliveryAddress.set(state.deliveryAddress);
        }
    }

    processPayment() {
        if (!this.cardName || !this.cardNumber || !this.expiryDate || !this.cvv) return;

        this.isProcessing.set(true);

        // Simulate payment process delay
        setTimeout(async () => {
            this.isProcessing.set(false);

            const items = this.cartItems();
            const currentUserId = this.auth.currentUser()?.id;
            
            for (const item of items) {
                await this.listingService.reserveListing(item.id, this.deliveryAddress() || 'Adres Belirtilmedi', currentUserId, 'Kredi Kartı');
            }

            // Clear the cart if paying from cart
            if (this.route.snapshot.paramMap.get('id') === 'cart') {
                this.cartService.clearCart();
            }

            this.isSuccess.set(true);
        }, 1500);
    }

    goBack() {
        this.location.back();
    }
}
