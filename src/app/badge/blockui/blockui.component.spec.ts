import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockuiComponent } from './blockui.component';

describe('BlockuiComponent', () => {
  let component: BlockuiComponent;
  let fixture: ComponentFixture<BlockuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BlockuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
