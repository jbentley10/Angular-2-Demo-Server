/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckFormComponent } from './check-form.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});