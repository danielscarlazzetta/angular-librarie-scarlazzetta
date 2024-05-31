import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScarlazzettaComponent } from './ngx-scarlazzetta.component';

describe('NgxScarlazzettaComponent', () => {
  let component: NgxScarlazzettaComponent;
  let fixture: ComponentFixture<NgxScarlazzettaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxScarlazzettaComponent]
    });
    fixture = TestBed.createComponent(NgxScarlazzettaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
