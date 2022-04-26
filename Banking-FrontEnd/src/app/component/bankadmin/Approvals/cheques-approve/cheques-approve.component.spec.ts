import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChequesApproveComponent } from './cheques-approve.component';

describe('ChequesApproveComponent', () => {
  let component: ChequesApproveComponent;
  let fixture: ComponentFixture<ChequesApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChequesApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChequesApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
