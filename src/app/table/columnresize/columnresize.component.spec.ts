import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnresizeComponent } from './columnresize.component';

describe('ColumnresizeComponent', () => {
  let component: ColumnresizeComponent;
  let fixture: ComponentFixture<ColumnresizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColumnresizeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColumnresizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
