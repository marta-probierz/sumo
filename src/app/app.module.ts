import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastModule } from 'primeng/toast';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { HomeComponent } from './home/home.component';
import { IntroHeaderComponent } from './home/intro-header/intro-header.component';
import { ToTopArrowComponent } from './shared/to-top-arrow/to-top-arrow.component';
import { HomeCardsService } from './services/home-cards.service';
import { ContactComponent } from './contact/contact.component';
import { OurWorkComponent } from './our-work/our-work.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TermsComponent,
    PrivacyPolicyComponent,
    HomeComponent,
    IntroHeaderComponent,
    ToTopArrowComponent,
    ContactComponent,
    OurWorkComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    ToastModule,
    HttpClientModule,
  ],
  providers: [HomeCardsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
