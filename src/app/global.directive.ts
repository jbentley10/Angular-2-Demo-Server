import { Directive, Injectable, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from 'rxjs/Rx';
import { DataService } from './data.service';

@Directive({
  selector: '[appGlobal]',
  providers: [DataService]
})

@Injectable()
export class GlobalDirective implements OnInit {
  data: any;
  url: string;
  corpName: string;
  corpAddresss: string;
  returnAddress: string;
  phone: string;
  email: string;
  price: string;
  trialPrice: string;
  productName: string;
  csBulletOne: string;
  csBulletTwo: string;
  csBulletThree: string;

  constructor (private dataService: DataService ) {}

  getData() {
    this.dataService.getData()
    .subscribe(
      response => this.data = response[0],
      error => console.error(error),
      () => {
        this.url = this.data.url;
        this.productName = this.data.productName;
        this.corpName = this.data.corpName;
        this.corpAddresss = this.data.corpAddress;
        this.returnAddress = this.data.returnAddress;
        this.phone = this.data.phone;
        this.email = this.data.email;
        this.price = this.data.price;
        this.trialPrice = this.data.trialPrice;
        this.csBulletOne = this.data.csBulletOne;
        this.csBulletTwo = this.data.csBulletTwo;
        this.csBulletThree = this.data.csBulletThree;
      }
    )
  }

  getProductName() {
    this.dataService.getProductName()
    .subscribe(
      response => this.data = response[0],
      error => console.error(error),
      () => {
        this.productName = this.data.productName;
      }
    )
  }

  ngOnInit(){
    this.getData();
  }

}
