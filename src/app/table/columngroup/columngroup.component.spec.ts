import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumngroupComponent } from './columngroup.component';

describe('ColumngroupComponent', () => {
  let component: ColumngroupComponent;
  let fixture: ComponentFixture<ColumngroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumngroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumngroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
