import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowgroupComponent } from './rowgroup.component';

describe('RowgroupComponent', () => {
  let component: RowgroupComponent;
  let fixture: ComponentFixture<RowgroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RowgroupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RowgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
