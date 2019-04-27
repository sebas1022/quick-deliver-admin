import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDomiciliarioComponent } from './asignar-domiciliario.component';

describe('AsignarDomiciliarioComponent', () => {
  let component: AsignarDomiciliarioComponent;
  let fixture: ComponentFixture<AsignarDomiciliarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarDomiciliarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDomiciliarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
