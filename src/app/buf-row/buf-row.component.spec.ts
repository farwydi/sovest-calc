import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BufRowComponent } from './buf-row.component';

describe('BufRowComponent', () => {
  let component: BufRowComponent;
  let fixture: ComponentFixture<BufRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BufRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BufRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
