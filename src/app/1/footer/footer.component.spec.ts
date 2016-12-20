/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutComponent } from '../checkout/checkout.component';
import { CheckHeaderComponent } from '../checkout/check-header/check-header.component';
import { CheckMainComponent } from '../checkout/check-main/check-main.component';
import { CheckFormComponent } from '../checkout/check-form/check-form.component';
import { FooterComponent } from '../footer/footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // // Corp Name
  // it('should display the corp name', () => {
  //   expect(testElement.textContent).toContain(comp.corpName);
  // });

  // // Corp Address
  // it('should display the corp address', () => {
  //   expect(testElement.textContent).toContain(comp.corpAddress);
  // });

  // // Phone
  // it('should display the phone', () => {
  //   expect(testElement.textContent).toContain(comp.phone);
  // });

  // // Email
  // it('should display the email', () => {
  //   expect(testElement.textContent).toContain(comp.email);
  // });

  // // Product Name
  // it('should display the product name', () => {
  //   expect(testElement.textContent).toContain(comp.productName);
  // });
});
