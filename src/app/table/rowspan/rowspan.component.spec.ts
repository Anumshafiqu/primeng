import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowspanComponent } from './rowspan.component';

describe('RowspanComponent', () => {
  let component: RowspanComponent;
  let fixture: ComponentFixture<RowspanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowspanComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowspanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
