import { Component, OnInit } from '@angular/core';
import { CheckoutComponent } from '../checkout.component';
import { GlobalDirective } from '../../../global.directive';
import { CheckFormComponent } from '../check-form/check-form.component';

@Component({
  selector: 'app-check-main',
  templateUrl: './check-main.component.html',
  styleUrls: ['./check-main.component.scss']
})
export class CheckMainComponent implements OnInit {

  constructor (public echos: GlobalDirective) {}

  ngOnInit() {
  }

}
