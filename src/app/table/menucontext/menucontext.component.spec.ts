import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenucontextComponent } from './menucontext.component';

describe('MenucontextComponent', () => {
  let component: MenucontextComponent;
  let fixture: ComponentFixture<MenucontextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenucontextComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenucontextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
