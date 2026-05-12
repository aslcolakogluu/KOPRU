import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from 'primeng/dialog';

export interface Leader {
  rank: number;
  name: string;
  type: string;
  savedKg: number;
  mealsProvided: number;
  description?: string;
  impactStory?: string;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule, DialogModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  
  selectedLeader: Leader | null = null;
  detailVisible = false;

  leaders: Leader[] = [
    { 
      rank: 1, 
      name: 'Bizim Ekmek Pastanesi', 
      type: 'Fırın', 
      savedKg: 1250, 
      mealsProvided: 4200,
      description: 'İstanbul\'un en köklü fırınlarından biri olan Bizim Ekmek, günlük üretim fazlası ürünlerini her akşam ihtiyaç sahiplerine ulaştırıyor.',
      impactStory: 'Bu ay toplam 1.25 ton unlu mamulü çöpe gitmekten kurtararak 4200 ailenin sofrasına taze ekmek ulaştırdı.'
    },
    { 
      rank: 2, 
      name: 'Sarıyer Gurme Market', 
      type: 'Market', 
      savedKg: 980, 
      mealsProvided: 3100,
      description: 'Sürdürülebilirlik odaklı yaklaşımıyla bilinen Sarıyer Gurme, son kullanma tarihi yaklaşan kaliteli gıdaları platform üzerinden paylaşıyor.',
      impactStory: '980 kg taze sebze, meyve ve süt ürününü kurtararak karbon ayak izini %15 oranında düşürdü.'
    },
    { 
      rank: 3, 
      name: 'Etiler Lüks Oteli', 
      type: 'Otel', 
      savedKg: 850, 
      mealsProvided: 2800,
      description: 'Sıfır atık mutfak prensibiyle çalışan otelimiz, açık büfede dokunulmamış ürünleri sterilize ederek paketliyor.',
      impactStory: 'Yüksek proteinli gıdaların kurtarılmasıyla 2800 sağlıklı öğünün hazırlanmasına öncülük etti.'
    },
    { 
      rank: 4, 
      name: 'Yeşil Ev Yemekleri', 
      type: 'Restoran', 
      savedKg: 620, 
      mealsProvided: 2100,
      description: 'Ev tipi tencere yemekleri hazırlayan restoranımız, günlük pişen ancak satılmayan yemekleri taze olarak bağışlıyor.',
      impactStory: '2100 porsiyon sıcak ev yemeği ile öğrenci evlerine ve evsizlere destek oldu.'
    },
    { 
      rank: 5, 
      name: 'Büyük Çarşı Manavı', 
      type: 'Manav', 
      savedKg: 490, 
      mealsProvided: 1600,
      description: 'Şekli bozuk olduğu için satılamayan ancak besleyiciliği tam olan meyveleri Köprü ile değerlendiriyor.',
      impactStory: 'Yarım tona yakın vitamini çöpe gitmekten kurtararak çocuk esirgeme kurumlarına ulaştırdı.'
    },
    { 
      rank: 6, 
      name: 'Üniversite Kız Yurdu', 
      type: 'Yurt', 
      savedKg: 310, 
      mealsProvided: 950,
      description: 'Yemekhanesinde artan güvenilir gıdaları Köprü aracılığıyla çevredeki ihtiyaç sahiplerine dağıtıyor.',
      impactStory: '310 kg gıdayı değerlendirerek yurt bütçesinde tasarruf ve sosyal fayda sağladı.'
    },
    { 
      rank: 7, 
      name: 'Lezzetli Tatlar Kafe', 
      type: 'Kafeterya', 
      savedKg: 205, 
      mealsProvided: 730,
      description: 'Günlük hazırlanan sandviç ve tatlıları, tazeliği korunarak gün sonunda sistem üzerinden paylaşıyor.',
      impactStory: 'Sandviç ve keklerin çöpe gitmesini engelleyerek 730 ara öğün sağladı.'
    },
  ];

  openDetail(leader: Leader) {
    this.selectedLeader = leader;
    this.detailVisible = true;
  }

}
