/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Cs1Component } from './cs-1.component';

describe('Cs1Component', () => {
  let component: Cs1Component;
  let fixture: ComponentFixture<Cs1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cs1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cs1Component);
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
