import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersApproveComponent } from './customers-approve.component';

describe('CustomersApproveComponent', () => {
  let component: CustomersApproveComponent;
  let fixture: ComponentFixture<CustomersApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
