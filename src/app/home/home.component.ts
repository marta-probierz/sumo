import { Component, OnInit } from '@angular/core';

import { HomeCardsService } from '../services/home-cards.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  homeCardsData: any;

  constructor(private homeCardsService: HomeCardsService) {}

  ngOnInit(): void {
    this.homeCardsService.getHomeCards().subscribe((res) => {
      this.homeCardsData = res;
    });
  }
}
