import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmodelsComponent } from './gmodels.component';

describe('GmodelsComponent', () => {
  let component: GmodelsComponent;
  let fixture: ComponentFixture<GmodelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmodelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GmodelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
