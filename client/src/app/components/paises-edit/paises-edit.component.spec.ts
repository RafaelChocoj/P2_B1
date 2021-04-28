import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEditComponent } from './paises-edit.component';

describe('PaisesEditComponent', () => {
  let component: PaisesEditComponent;
  let fixture: ComponentFixture<PaisesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
