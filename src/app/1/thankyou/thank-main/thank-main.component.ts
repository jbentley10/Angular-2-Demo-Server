import { Component } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { DataService } from '../../../data.service';
import { MainFormComponent } from '../../lander/main-form/main-form.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-thank-main',
  templateUrl: './thank-main.component.html',
  styleUrls: ['./thank-main.component.scss'],
  providers: [GlobalDirective, DataService]
})

export class ThankMainComponent {
  testMessage: any;
  anotherTest: any;
  fName: any;
  productName: any;

  // constructor (public echos: GlobalDirective,public form: MainFormComponent) {
  //   this.testMessage = 'Im dancin like a monkey!';
  //   this.anotherTest = 'What is up';
  // }

  getData() {
    this.echos.getData();
  }

  getProductName() {
    this.echos.getProductName();
  }

  ngOnInit() {
    this.getData();
    this.getProductName();
  }

  constructor(public echos: GlobalDirective) {
    this.productName = this.echos.productName;
    console.log("product name is: " + this.productName);
  }
}
