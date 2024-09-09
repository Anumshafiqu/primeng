import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozenrowComponent } from './frozenrow.component';

describe('FrozenrowComponent', () => {
  let component: FrozenrowComponent;
  let fixture: ComponentFixture<FrozenrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrozenrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrozenrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
