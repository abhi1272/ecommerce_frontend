import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookCreateComponent } from './cashbook-create.component';

describe('CashbookCreateComponent', () => {
  let component: CashbookCreateComponent;
  let fixture: ComponentFixture<CashbookCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
