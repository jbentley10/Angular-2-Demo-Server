/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckoutComponent } from './checkout.component';
import { CheckHeaderComponent } from './check-header/check-header.component';
import { CheckMainComponent } from './check-main/check-main.component';
import { CheckFormComponent } from './check-form/check-form.component';
import { FooterComponent } from '../footer/footer.component';

describe('CheckMainComponent', () => {
  let component: CheckMainComponent;
  let fixture: ComponentFixture<CheckMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Corp Name
  it('should display the corp name', () => {
    console.log("I got the name of the product! It's " + comp.corpName);
    expect(testElement.textContent).toContain(comp.corpName);
  });
});
