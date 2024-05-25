import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItem3Component } from './service-item3.component';

describe('ServiceItem3Component', () => {
  let component: ServiceItem3Component;
  let fixture: ComponentFixture<ServiceItem3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceItem3Component]
    });
    fixture = TestBed.createComponent(ServiceItem3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
