import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetakeyComponent } from './metakey.component';

describe('MetakeyComponent', () => {
  let component: MetakeyComponent;
  let fixture: ComponentFixture<MetakeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MetakeyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MetakeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
