import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrinComponent } from './prin.component';

describe('PrinComponent', () => {
  let component: PrinComponent;
  let fixture: ComponentFixture<PrinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
