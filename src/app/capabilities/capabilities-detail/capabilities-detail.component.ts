import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capabilities-detail',
  templateUrl: './capabilities-detail.component.html',
  styleUrls: ['../../our-work/details/details.component.scss'],
})
export class CapabilitiesDetailComponent implements OnInit {
  capabilitiesData: any;
  link: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.link = this.activatedRoute.snapshot.paramMap.get('link');
    if (this.link) {
      this.httpClient
        .get('../../assets/data/capabilities.json')
        .subscribe((data: any) => {
          data.find((item) => {
            if (this.link === item.link) {
              this.capabilitiesData = item;
            }
          });
        });
    }
  }
}
