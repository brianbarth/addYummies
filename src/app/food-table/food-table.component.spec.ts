import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTableComponent } from './food-table.component';

describe('FoodTableComponent', () => {
  let component: FoodTableComponent;
  let fixture: ComponentFixture<FoodTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
