import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventosEditComponent } from './inventos-edit.component';

describe('InventosEditComponent', () => {
  let component: InventosEditComponent;
  let fixture: ComponentFixture<InventosEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventosEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
