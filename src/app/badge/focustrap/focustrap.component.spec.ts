import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocustrapComponent } from './focustrap.component';

describe('FocustrapComponent', () => {
  let component: FocustrapComponent;
  let fixture: ComponentFixture<FocustrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FocustrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FocustrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
