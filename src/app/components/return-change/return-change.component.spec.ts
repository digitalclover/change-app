import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnChangeComponent } from './return-change.component';

describe('ReturnChangeComponent', () => {
  let component: ReturnChangeComponent;
  let fixture: ComponentFixture<ReturnChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
