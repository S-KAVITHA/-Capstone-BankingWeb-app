import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountopenComponent } from './accountopen.component';

describe('AccountopenComponent', () => {
  let component: AccountopenComponent;
  let fixture: ComponentFixture<AccountopenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountopenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
