import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { HeaderComponent } from './header/header.component';
import { OfferListComponent } from './offer-list/offer-list.component';
import { OfferComponent } from './offer-list/offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginModalComponent,
    HeaderComponent,
    OfferListComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
