import { Component, inject, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [RouterModule, ButtonModule],
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
    private scrollReveal = inject(ScrollRevealService);

    ngAfterViewInit() {
        this.scrollReveal.observe();
    }
    values = [
        { icon: 'pi pi-heart', title: 'Sosyal Sorumluluk', desc: 'Her gün tonlarca gıda israf olurken, ihtiyaç sahiplerine ulaştırılmayı bekliyor. Biz bu köprüyü kuruyoruz.' },
        { icon: 'pi pi-globe', title: 'Sürdürülebilirlik', desc: 'Gıda israfını azaltarak karbon ayak izimizi küçültüyoruz ve daha yaşanabilir bir gelecek için çalışıyoruz.' },
        { icon: 'pi pi-users', title: 'Topluluk', desc: 'İşletmeler, kurumlar ve gönüllülerden oluşan güçlü bir topluluk ile birlikte hareket ediyoruz.' },
        { icon: 'pi pi-shield', title: 'Güvenilirlik', desc: 'Hijyen standartlarına uygun, güvenli ve şeffaf bir süreç ile gıda güvenliği sağlanır.' }
    ];

    stats = [
        { value: '1,247+', label: 'Porsiyon Kurtarıldı' },
        { value: '186', label: 'Partner İşletme' },
        { value: '42', label: 'Alıcı Kurum' }
    ];

    team = [
        { name: 'Proje Ekibi', role: 'Kurucu Takım', desc: 'Gıda israfını önleme vizyonuyla yola çıkan, teknolojiyi sosyal fayda için kullanan bir ekip.' }
    ];
}
