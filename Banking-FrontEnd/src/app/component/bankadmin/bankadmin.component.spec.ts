import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankadminComponent } from './bankadmin.component';

describe('BankadminComponent', () => {
  let component: BankadminComponent;
  let fixture: ComponentFixture<BankadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankadminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
