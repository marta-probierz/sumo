import { Component, OnInit } from '@angular/core';

import { OurWorkCardsService } from '../services/our-work-cards.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
})
export class OurWorkComponent implements OnInit {
  ourWorkCardsData;

  constructor(private ourWorkCardsService: OurWorkCardsService) {}

  ngOnInit(): void {
    this.ourWorkCardsService.getOurWorkCards().subscribe((res) => {
      this.ourWorkCardsData = res;
    });
  }
}
