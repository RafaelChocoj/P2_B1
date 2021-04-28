import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasEditComponent } from './preguntas-edit.component';

describe('PreguntasEditComponent', () => {
  let component: PreguntasEditComponent;
  let fixture: ComponentFixture<PreguntasEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreguntasEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
