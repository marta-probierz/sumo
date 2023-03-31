import { Component } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
})
export class TermsComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToTop(): void {
    return this.document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
}
