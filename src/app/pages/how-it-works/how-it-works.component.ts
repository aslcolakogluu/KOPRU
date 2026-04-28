import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { ScrollRevealService } from '../../services/scroll-reveal.service';

@Component({
    selector: 'app-how-it-works',
    standalone: true,
    imports: [CommonModule, TabViewModule, AccordionModule, ButtonModule, RouterModule],
    templateUrl: './how-it-works.component.html',
    styleUrls: ['./how-it-works.component.scss']
})
export class HowItWorksComponent implements AfterViewInit {
  private scrollReveal = inject(ScrollRevealService);

  ngAfterViewInit() {
    this.scrollReveal.observe();
  }

    donorSteps = [
      {
        icon: 'pi pi-user-plus',
        title: 'İşletme Profilini Oluşturun',
        description: 'İşletmenizi saniyeler içinde kaydedin. Restoran, market, otel veya pastane olarak profilinizi özelleştirin.',
        image: '/assets/images/steps/registration_step.png'
      },
      {
        icon: 'pi pi-plus-circle',
        title: 'Fazla Gıdaları Listeleyin',
        description: 'Gün sonunda kalan taze gıdaları saniyeler içinde platforma yükleyin. Başlık, miktar ve son kullanma saati girmeniz yeterli.',
        image: '/assets/images/steps/listing_food_step.png'
      },
      {
        icon: 'pi pi-bell',
        title: 'Kurumlarla Paylaşın',
        description: 'İlanınız yayınlandığı an bölgedeki kurumlar haberdar edilir. Rezervasyon geldiğinde onaylayın ve gıdayı hazırlayın.',
        image: '/assets/images/steps/notification_step.png'
      }
    ];

    receiverSteps = [
      {
        icon: 'pi pi-building',
        title: 'Kurumunuzu Kaydedin',
        description: 'Aşevi, barınak veya sivil toplum kuruluşu olarak kaydınızı yapın. Doğrulama sonrası sisteme erişim sağlayın.',
        image: '/assets/images/steps/registration_step.png'
      },
      {
        icon: 'pi pi-search',
        title: 'Gıdaları Keşfedin',
        description: 'Harita üzerinden veya listeden çevrenizdeki işletmelerin paylaştığı taze gıda ürünlerini anlık olarak takip edin.',
        image: '/assets/images/steps/discover_food_step.png'
      },
      {
        icon: 'pi pi-truck',
        title: 'Teslim Alın ve Paylaşın',
        description: 'Rezerve ettiğiniz gıdayı belirtilen saatte işletmeden teslim alın ve ihtiyaç sahiplerine ulaştırın.',
        image: '/assets/images/steps/pickup_food_step.png'
      }
    ];

    faqs = [
      {
        q: 'Gıda güvenliği nasıl sağlanıyor?',
        a: 'Sistemimize sadece kayıtlı ve lisanslı gıda işletmeleri ilan verebilir. Ayrıca her ilan için son kullanma tarihi ve gıda güvenliği yönergeleri belirtilmek zorundadır.'
      },
      {
        q: 'Lojistik / Taşıma kimin sorumluluğunda?',
        a: 'Genel modelimizde taşıma, ihtiyacı olan kurum (Alıcı) tarafından gerçekleştirilir. İşletme gıdayı hazırlar, kurum yetkilisi belirtilen saatte teslim alır.'
      },
      {
        q: 'Sisteme katılmak ücretli mi?',
        a: 'Köprü, gıda israfını önlemeyi amaçlayan sosyal bir girişimdir. Temel fonksiyonlar bağışçı işletmeler ve kamu yararı gözeten kurumlar için ücretsizdir.'
      }
    ];
}
