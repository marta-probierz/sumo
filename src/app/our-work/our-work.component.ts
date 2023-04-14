import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { OurWorkService } from '../services/our-work-cards.service';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss'],
})
export class OurWorkComponent implements OnInit {
  ourWorkCardsData: any;
  ourWorkLogosData: any;
  industry = new FormControl('');
  industryList: string[] = [
    'Apparel',
    'Computer',
    'Construction',
    'Consumer Goods',
    'Entertainment',
    'Food',
    'Health & Beauty',
    'Hospitality',
    'Manufacturing',
    'Mass Media',
    'Service',
    'Telecommunications',
    'Transport',
  ];

  constructor(private ourWorkService: OurWorkService) {}

  ngOnInit(): void {
    this.ourWorkService.getOurWorkCards().subscribe((res) => {
      this.ourWorkCardsData = res;
    });

    this.ourWorkLogosData = this.ourWorkService.ourWorkLogosData;
  }

  optionSelected(event) {
    if (event.isUserInput) {
      this.ourWorkLogosData = this.ourWorkService.ourWorkLogosData.filter(
        (item) => item.industry === event.source.value
      );
    }
  }

  onShowAll() {
    this.ourWorkLogosData = this.ourWorkService.ourWorkLogosData;
  }
}
