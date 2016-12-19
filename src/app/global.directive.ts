import { Directive, Injectable } from '@angular/core';


@Directive({
  selector: '[appGlobal]'
})

@Injectable()
export class GlobalDirective {

  //FooterComponent
  productName = 'Muscle Enhance';
  url = 'trycjskincream.com';
  corpName = 'CJ Wellness, LLC.';
  corpAddress = '817 Riddlewood Ln., Highlands Ranch, CO 80129';
  returnAddress = '7308 S Alton Way Suite 2-A, Centennial,CO 80112';
  phone = '(888) 312-9976';
  email = 'care@trycjskincream.com';
  price = '$24.99';

  //Cs-1 Bullet points
  csBulletOne = '100% potent L-Arginine enhancement';
  csBulletTwo = 'May increase blood flow and improve muscular tone';
  csBulletThree = 'May help achieve ideal physique';
}
// import { Directive, Injectable, OnInit } from '@angular/core';
// import {Http, Response, Headers, RequestOptions} from "@angular/http";
// import {Observable} from 'rxjs/Rx';
// import { DataService } from './data.service';
//
// @Directive({
//   selector: '[appGlobal]',
//   providers: [DataService]
// })
//
// @Injectable()
// export class GlobalDirective implements OnInit {
//   data: any;
//   url: string;
//   corpName: string;
//   corpAddresss: string;
//   returnAddress: string;
//   phone: string;
//   email: string;
//   price: string;
//   trialPrice: string;
//   productName: string;
//   csBulletOne: string;
//   csBulletTwo: string;
//   csBulletThree: string;
//
//   constructor (private dataService: DataService ) {}
//
//   getData(): void {
//     this.dataService.getData()
//     .subscribe(
//       response => this.data = response[0],
//       error => console.error(error),
//       () => {
//         this.url = this.data.url;
//         this.productName = this.data.productName;
//         this.corpName = this.data.corpName;
//         this.corpAddresss = this.data.corpAddress;
//         this.returnAddress = this.data.returnAddress;
//         this.phone = this.data.phone;
//         this.email = this.data.email;
//         this.price = this.data.price;
//         this.trialPrice = this.data.trialPrice;
//         this.csBulletOne = this.data.csBulletOne;
//         this.csBulletTwo = this.data.csBulletTwo;
//         this.csBulletThree = this.data.csBulletThree;
//       }
//
//     )
//   }
//
//   ngOnInit(){
//     this.getData();
//   }
//
// }
