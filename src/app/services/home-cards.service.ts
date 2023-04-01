import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeCardsService {
  constructor(private httpService: HttpClient) {}

  getHomeCards() {
    return this.httpService.get('../../assets/data/home-cards.json');
  }
}
