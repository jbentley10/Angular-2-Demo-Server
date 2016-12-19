import { Component } from '@angular/core';
import { GlobalDirective } from '../../../global.directive';
import { MainFormComponent } from '../../lander/main-form/main-form.component';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-thank-main',
  templateUrl: './thank-main.component.html',
  styleUrls: ['./thank-main.component.scss'],
  providers: [GlobalDirective, MainFormComponent]
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

  constructor(public echos: GlobalDirective) {}

  getData() {
    this.echos.getData();
  }

  ngOnInit() {
    this.getData();
  }

}
