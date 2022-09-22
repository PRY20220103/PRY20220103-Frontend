import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeCommentsComponent } from './see-comments.component';

describe('SeeCommentsComponent', () => {
  let component: SeeCommentsComponent;
  let fixture: ComponentFixture<SeeCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
