import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewallproductbycategoryComponent } from './viewallproductbycategory.component';

describe('ViewallproductbycategoryComponent', () => {
  let component: ViewallproductbycategoryComponent;
  let fixture: ComponentFixture<ViewallproductbycategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewallproductbycategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewallproductbycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
