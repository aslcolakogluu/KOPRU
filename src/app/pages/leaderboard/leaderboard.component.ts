import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Leader {
  rank: number;
  name: string;
  type: string;
  savedKg: number;
  mealsProvided: number;
}

@Component({
  selector: 'app-leaderboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent {
  
  leaders: Leader[] = [
    { rank: 1, name: 'Bizim Ekmek Pastanesi', type: 'Fırın', savedKg: 1250, mealsProvided: 4200 },
    { rank: 2, name: 'Sarıyer Gurme Market', type: 'Market', savedKg: 980, mealsProvided: 3100 },
    { rank: 3, name: 'Etiler Lüks Oteli', type: 'Otel', savedKg: 850, mealsProvided: 2800 },
    { rank: 4, name: 'Yeşil Ev Yemekleri', type: 'Restoran', savedKg: 620, mealsProvided: 2100 },
    { rank: 5, name: 'Büyük Çarşı Manavı', type: 'Manav', savedKg: 490, mealsProvided: 1600 },
    { rank: 6, name: 'Üniversite Kız Yurdu', type: 'Yurt', savedKg: 310, mealsProvided: 950 },
    { rank: 7, name: 'Lezzetli Tatlar Kafe', type: 'Kafeterya', savedKg: 205, mealsProvided: 730 },
  ];

}
