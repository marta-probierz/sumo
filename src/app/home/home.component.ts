import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    public messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      companyName: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit(contactForm) {
    const url = 'https://formspree.io/f/mlekplrg';

    const httpOptions = {
      headers: new HttpHeaders({
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    };

    let data = `firstName=${contactForm.firstName}&lastName=${contactForm.lastName}&email=${contactForm.email}&companyName=${contactForm.companyName}`;

    this.httpClient.post<any>(url, data, httpOptions).subscribe({
      next: () => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Your message was sent successfully',
        });
        this.contactForm.reset();
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      },
    });
  }
}
