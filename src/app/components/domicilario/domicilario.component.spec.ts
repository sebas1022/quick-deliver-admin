import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomicilarioComponent } from './domicilario.component';

describe('DomicilarioComponent', () => {
  let component: DomicilarioComponent;
  let fixture: ComponentFixture<DomicilarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DomicilarioComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomicilarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
