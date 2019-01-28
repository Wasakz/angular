import {Component, Input, OnInit} from '@angular/core';
import { OfferModel } from './offer.model';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  private eventsSubscription: any;

  @Input('parentForm') parentForm: FormGroup;

  offerModels = [
    new OfferModel('Opel Astra', 'Swietny samochód', '5', 'M',
      'A/C', '5', '130'),
    new OfferModel('Kia Rio', 'Niezawodne auto', '5', 'A',
      'A/C', '3', '120'),
    new OfferModel('BMW Series 3', 'Niemiecka precyzja', '5', 'A',
      'A/C', '4', '180')
  ];
  constructor() { }

  addOffer() {
    let offer;
    offer = this.parentForm.value;
    this.offerModels.push(new OfferModel(offer.name, offer.description, offer.seatsNumber, offer.gearBox,
      offer.airCondition, offer.doorNumber, offer.price));
  }

  ngOnInit(): void {
    console.log(this.parentForm.value);
  }


}
