/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ThankMainComponent } from './thank-main.component';

describe('ThankMainComponent', () => {
  let comp:      ThankMainComponent;
  let fixture:   ComponentFixture<ThankMainComponent>;
  let de:        DebugElement;
  let el:        HTMLElement;
  let debugH1:   DebugElement;
  let elementH1: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ ThankMainComponent ], // declare the test component
    })
    .compileComponents();  // compile template and css
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankMainComponent);
    comp = fixture.componentInstance; // ThankMainComponent test instance

    //fixture.detectChanges();

    // query for the form element that the user put in
    formDebugElement = fixture.debugElement.query(By.css('span'));
    formElement = formDebugElement.nativeElement;

    // query for the variable names that are unique to the website (display variables)
    displayDebugElement = fixture.debugElement.query(By.css('span'));
    displayElement = displayDebugElement.nativeElement;
  });

  // TESTS TO RUN
  it('should create', () => {
    expect(comp).toBeTruthy();
  });

  it('should display the name of the customer', () => {
    fixture.detectChanges();
    expect(formElement.textContent).toContain(comp.fName);
  });

  it('should display the product name created in the global variables page', () => {
    fixture.detectChanges();
    expect(displayElement.textContent).toContain(comp.fName);
  });
});
