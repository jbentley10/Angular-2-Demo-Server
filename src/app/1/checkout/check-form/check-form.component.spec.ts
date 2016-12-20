/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutComponent } from '../../checkout/checkout.component';
import { CheckHeaderComponent } from '../check-header/check-header.component';
import { CheckMainComponent } from '../check-main/check-main.component';
import { CheckFormComponent } from './check-form.component';
import { FooterComponent } from '../../footer/footer.component';

describe('CheckFormComponent', () => {
  let component: CheckFormComponent;
  let fixture: ComponentFixture<CheckFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); 
  });

  // // Product Name
  // it('should display the product name', () => {
  //   console.log("I got the name of the product! It's " + comp.productName);
  //   expect(testElement.textContent).toContain(comp.productName);
  // });
  //
  // // Trial Price
  // it('should display the trial price', () => {
  //   expect(testElement.textContent).toContain(comp.trialPrice);
  // });
  //
  // // Rebill Price
  // it('should display the rebill price', () => {
  //   expect(testElement.textContent).toContain(comp.rebillPrice);
  // });
  //
  // // Total
  // it('should display the total', () => {
  //   expect(testElement.textContent).toContain(comp.total);
  // });
  //
  // // Email
  // it('should display the email', () => {
  //   expect(testElement.textContent).toContain(comp.email);
  // });
});
