import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplecolumsComponent } from './multiplecolums.component';

describe('MultiplecolumsComponent', () => {
  let component: MultiplecolumsComponent;
  let fixture: ComponentFixture<MultiplecolumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MultiplecolumsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MultiplecolumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
