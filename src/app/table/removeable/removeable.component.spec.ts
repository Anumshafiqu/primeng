import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveableComponent } from './removeable.component';

describe('RemoveableComponent', () => {
  let component: RemoveableComponent;
  let fixture: ComponentFixture<RemoveableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemoveableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RemoveableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
