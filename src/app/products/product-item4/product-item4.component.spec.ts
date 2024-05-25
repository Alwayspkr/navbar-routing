import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductItem4Component } from './product-item4.component';

describe('ProductItem4Component', () => {
  let component: ProductItem4Component;
  let fixture: ComponentFixture<ProductItem4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductItem4Component]
    });
    fixture = TestBed.createComponent(ProductItem4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
