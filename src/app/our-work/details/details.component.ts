import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  ourWorkCardsData: any;
  link: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.link = this.activatedRoute.snapshot.paramMap.get('link');
    if (this.link) {
      this.httpClient
        .get('../../assets/data/our-work-cards.json')
        .subscribe((data: any) => {
          data.find((item) => {
            if (this.link === item.link) {
              this.ourWorkCardsData = item;
            }
          });
        });
    }
  }
}
