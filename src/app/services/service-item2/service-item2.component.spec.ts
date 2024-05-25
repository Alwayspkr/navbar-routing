import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItem2Component } from './service-item2.component';

describe('ServiceItem2Component', () => {
  let component: ServiceItem2Component;
  let fixture: ComponentFixture<ServiceItem2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiceItem2Component]
    });
    fixture = TestBed.createComponent(ServiceItem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
