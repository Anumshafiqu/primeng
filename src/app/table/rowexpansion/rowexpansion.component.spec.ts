import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowexpansionComponent } from './rowexpansion.component';

describe('RowexpansionComponent', () => {
  let component: RowexpansionComponent;
  let fixture: ComponentFixture<RowexpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowexpansionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowexpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
