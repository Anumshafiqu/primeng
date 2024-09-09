import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrozencolumnComponent } from './frozencolumn.component';

describe('FrozencolumnComponent', () => {
  let component: FrozencolumnComponent;
  let fixture: ComponentFixture<FrozencolumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FrozencolumnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrozencolumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
