/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainFormComponent } from './main-form.component';

describe('MainFormComponent', () => {
  let component: MainFormComponent;
  let fixture: ComponentFixture<MainFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // // Corp Name
  // it('should display the product name', () => {
  //   console.log("I got the name of the product! It's " + comp.corpName);
  //   expect(testElement.textContent).toContain(comp.corpName);
  // });
  //
  // // Price
  // it('should display the price', () => {
  //   expect(testElement.textContent).toContain(comp.price);
  // });
  //
  // // Product Name
  // it('should display the product name', () => {
  //   expect(testElement.textContent).toContain(comp.productName);
  // });
  //
  // // Phone
  // it('should display the phone', () => {
  //   expect(testElement.textContent).toContain(comp.phone);
  // });
  //
  // // Email
  // it('should display the email', () => {
  //   expect(testElement.textContent).toContain(comp.email);
  // });
});
