import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxbarcodeComponent } from './ngxbarcode.component';

describe('NgxbarcodeComponent', () => {
  let component: NgxbarcodeComponent;
  let fixture: ComponentFixture<NgxbarcodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxbarcodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxbarcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
