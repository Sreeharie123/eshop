import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoriesComponent } from './catergories.component';

describe('CatergoriesComponent', () => {
  let component: CatergoriesComponent;
  let fixture: ComponentFixture<CatergoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatergoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatergoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
