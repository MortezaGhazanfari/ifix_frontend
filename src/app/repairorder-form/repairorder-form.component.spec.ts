import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairorderFormComponent } from './repairorder-form.component';

describe('RepairorderFormComponent', () => {
  let component: RepairorderFormComponent;
  let fixture: ComponentFixture<RepairorderFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RepairorderFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RepairorderFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
