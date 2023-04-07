import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
  providers: [MessageService],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    public messageService: MessageService,
    private httpClient: HttpClient
  ) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      companyName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phoneNumber: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]),
      help: new FormControl(null, Validators.required),
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

    let data = `name=${contactForm.name}&companyName=${contactForm.companyName}&email=${contactForm.email}&phoneNumber=${contactForm.phoneNumber}&help=${contactForm.help}`;

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
