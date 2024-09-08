import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresortComponent } from './presort.component';

describe('PresortComponent', () => {
  let component: PresortComponent;
  let fixture: ComponentFixture<PresortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PresortComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PresortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
