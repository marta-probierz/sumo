import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-to-top-arrow',
  templateUrl: './to-top-arrow.component.html',
  styleUrls: ['./to-top-arrow.component.scss'],
})
export class ToTopArrowComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
