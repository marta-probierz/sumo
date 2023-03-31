import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [MessageService],
})
export class HomeComponent implements OnInit {
  contactForm: FormGroup;

  constructor(public messageService: MessageService) {}

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null),
      email: new FormControl(null, [Validators.required, Validators.email]),
      companyName: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Your message was sent successfully',
    });
    this.contactForm.reset();
  }
}
