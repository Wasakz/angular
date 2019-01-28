import {Component, OnInit, ViewChild} from '@angular/core';
import { OfferComponent } from './offer/offer.component';
import { OfferModel } from './offer/offer.model';
import {FormControl, FormGroup} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.css']
})
export class OfferListComponent implements OnInit {
  addOfferForm: FormGroup;

  @ViewChild(OfferComponent) offer: OfferComponent;


  constructor() {
  }

  ngOnInit() {
    this.addOfferForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'seatsNumber': new FormControl(),
      'gearBox': new FormControl(),
      'airCondition': new FormControl(),
      'doorNumber': new FormControl(),
      'price': new FormControl()
    });
  }
  onSubmit() {
    this.offer.addOffer()
    console.log(this.addOfferForm.value);
  }



}
