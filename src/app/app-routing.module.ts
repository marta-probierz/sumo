import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';
import { ContactComponent } from './contact/contact.component';
import { OurWorkComponent } from './our-work/our-work.component';
import { DetailsComponent } from './our-work/details/details.component';
import { CapabilitiesComponent } from './capabilities/capabilities.component';
import { CapabilitiesDetailComponent } from './capabilities/capabilities-detail/capabilities-detail.component';
import { InsightsComponent } from './insights/insights.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'our-work/:link', component: DetailsComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'capabilities/:link', component: CapabilitiesDetailComponent },
  { path: 'insights', component: InsightsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
