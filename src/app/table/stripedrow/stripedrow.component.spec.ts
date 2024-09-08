import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripedrowComponent } from './stripedrow.component';

describe('StripedrowComponent', () => {
  let component: StripedrowComponent;
  let fixture: ComponentFixture<StripedrowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StripedrowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StripedrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
