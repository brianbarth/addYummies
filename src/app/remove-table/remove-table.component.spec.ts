import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTableComponent } from './remove-table.component';

describe('RemoveTableComponent', () => {
  let component: RemoveTableComponent;
  let fixture: ComponentFixture<RemoveTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoveTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
