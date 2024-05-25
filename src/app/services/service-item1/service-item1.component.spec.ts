import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItem1Component } from './service-item1.component';

describe('ServiceItem1Component', () => {
  let component: ServiceItem1Component;
  let fixture: ComponentFixture<ServiceItem1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceItem1Component]
    });
    fixture = TestBed.createComponent(ServiceItem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
