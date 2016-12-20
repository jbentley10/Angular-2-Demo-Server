/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { GlobalDirective } from '../../../global.directive';
import { DataService } from '../../../data.service';
import { DebugElement } from '@angular/core';

import { ThankMainComponent } from './thank-main.component';

describe('ThankMainComponent', () => {
  let comp:                       ThankMainComponent;
  let fixture:                    ComponentFixture<ThankMainComponent>;
  let testDebugElement:           DebugElement;
  let formDebugElement:           DebugElement;
  let displayDebugElement:        DebugElement;
  let testElement:                HTMLElement;
  let formElement:                HTMLElement;
  let displayElement:             HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankMainComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankMainComponent);
    comp = fixture.componentInstance; // ThankMainComponent test instance
    fixture.detectChanges();

    // query for the TEST variable
    testDebugElement = fixture.debugElement.query(By.css('em'));
    testElement = testDebugElement.nativeElement;

    // query for the form element that the user put in
    formDebugElement = fixture.debugElement.query(By.css('span'));
    formElement = formDebugElement.nativeElement;

    // query for the variable names that are unique to the website (display variables)
    displayDebugElement = fixture.debugElement.query(By.css('span'));
    displayElement = displayDebugElement.nativeElement;
  });

  // // TESTS TO RUN
  // it('should create', () => {
  //   expect(comp).toBeTruthy();
  // });

  // TEST Variable
  it('should display the product name', () => {
    expect(testElement.textContent).toContain(comp.productName);
  });

  // Trial Price
  // it('should display the trial price', () => {
  //   expect(testElement.textContent).toContain(comp.trialPrice);
  // });

  // Customer Name
  // it('should display the customer name', () => {
  //   expect(testElement.textContent).toContain(comp.fName);
  // });

  // Product Name
  // it('should display the product name', () => {
  //   expect(testElement.textContent).toContain(comp.productName);
  // });
});
