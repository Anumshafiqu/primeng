import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnselectionComponent } from './columnselection.component';

describe('ColumnselectionComponent', () => {
  let component: ColumnselectionComponent;
  let fixture: ComponentFixture<ColumnselectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnselectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
