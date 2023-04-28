import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insights-detail',
  templateUrl: './insights-detail.component.html',
  styleUrls: ['./insights-detail.component.scss'],
})
export class InsightsDetailComponent implements OnInit {
  blogPosts;
  link: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.link = this.activatedRoute.snapshot.paramMap.get('link');
    if (this.link) {
      this.httpClient
        .get('../../assets/data/blog.json')
        .subscribe((data: any) => {
          data.find((item) => {
            if (this.link === item.link) {
              this.blogPosts = item;
            }
          });
        });
    }
  }
}
