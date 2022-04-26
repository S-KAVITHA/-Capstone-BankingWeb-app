import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TxnsApproveComponent } from './txns-approve.component';

describe('TxnsApproveComponent', () => {
  let component: TxnsApproveComponent;
  let fixture: ComponentFixture<TxnsApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TxnsApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TxnsApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
