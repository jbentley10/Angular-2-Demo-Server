import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalComponent } from './modal/modal.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})

export class FooterComponent implements OnInit {
  // Contact and product information
  productName = 'Muscle Enhance';
  url = 'trycjskincream.com';
  corpName = 'CJ Wellness, LLC.';
  coprAddress = '817 Riddlewood Ln., Highlands Ranch, CO 80129';
  returnAddress = '7308 S Alton Way Suite 2-A, Centennial,CO 80112';
  phone = '(888) 312-9976';
  email = 'care@trycjskincream.com';

  @ViewChild(ModalComponent)
  public readonly modal: ModalComponent;

  constructor() { }

  ngOnInit() {
  }

}
