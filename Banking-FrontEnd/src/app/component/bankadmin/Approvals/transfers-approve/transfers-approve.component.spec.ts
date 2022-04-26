import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransfersApproveComponent } from './transfers-approve.component';

describe('TransfersApproveComponent', () => {
  let component: TransfersApproveComponent;
  let fixture: ComponentFixture<TransfersApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransfersApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransfersApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
