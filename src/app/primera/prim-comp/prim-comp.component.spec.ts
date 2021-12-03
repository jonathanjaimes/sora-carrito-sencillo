import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimCompComponent } from './prim-comp.component';

describe('PrimCompComponent', () => {
  let component: PrimCompComponent;
  let fixture: ComponentFixture<PrimCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrimCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
