import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
