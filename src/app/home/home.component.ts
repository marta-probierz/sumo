import { Component, OnInit } from '@angular/core';

import { LogosService } from '../services/logos.service';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  logos: any;
  blogPosts: any[] = [];

  constructor(
    private logosService: LogosService,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.logosService.getLogos().subscribe((res) => {
      this.logos = res;
    });

    this.blogService.getBlogPosts().subscribe((res) => {
      this.blogPosts = res;
    });
  }
}
