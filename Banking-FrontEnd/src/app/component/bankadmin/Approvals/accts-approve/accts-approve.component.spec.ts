import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcctsApproveComponent } from './accts-approve.component';

describe('AcctsApproveComponent', () => {
  let component: AcctsApproveComponent;
  let fixture: ComponentFixture<AcctsApproveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcctsApproveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcctsApproveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
