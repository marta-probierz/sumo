import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class OurWorkCardsService {
  constructor(private httpService: HttpClient) {}

  getOurWorkCards() {
    return this.httpService.get('../../assets/data/our-work-cards.json');
  }
}
