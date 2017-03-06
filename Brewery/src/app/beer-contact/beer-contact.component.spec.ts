/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BeerContactComponent } from './beer-contact.component';

describe('BeerContactComponent', () => {
  let component: BeerContactComponent;
  let fixture: ComponentFixture<BeerContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
