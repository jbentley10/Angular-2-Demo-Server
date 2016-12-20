/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainInfoComponent } from './main-info.component';
import { MainFormComponent } from '../main-form/main-form.component';

describe('MainInfoComponent', () => {
  let component: MainInfoComponent;
  let fixture: ComponentFixture<MainInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // // CS Bullet 1
  // it('should display the first bullet', () => {
  //   expect(testElement.textContent).toContain(comp.csBulletOne);
  // });

  // // CS Bullet 2
  // it('should display the second bullet', () => {
  //   expect(testElement.textContent).toContain(comp.csBulletTwo);
  // });

  // // CS Bullet 3
  // it('should display the third bullet', () => {
  //   expect(testElement.textContent).toContain(comp.csBulletThree);
  // });
});
