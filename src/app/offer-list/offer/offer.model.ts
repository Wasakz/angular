export class OfferModel {
  public name: string;
  public description: string;
  public seatsNumber: string;
  public gearBox: string;
  public airCondition: string;
  public doorNumber: string;
  public price: string;


  constructor(name: string, description: string, seatsNumber: string, gearBox: string, airCondition: string, doorNumber: string, price: string) {
    this.name = name;
    this.description = description;
    this.seatsNumber = seatsNumber;
    this.gearBox = gearBox;
    this.airCondition = airCondition;
    this.doorNumber = doorNumber;
    this.price = price;
  }
}
