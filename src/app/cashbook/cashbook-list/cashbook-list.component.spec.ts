import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookListComponent } from './cashbook-list.component';

describe('CashbookListComponent', () => {
  let component: CashbookListComponent;
  let fixture: ComponentFixture<CashbookListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashbookListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashbookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
