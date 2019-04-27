import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPedidosComponent } from './listar.component';

describe('ListarPedidosComponent', () => {
  let component: ListarPedidosComponent;
  let fixture: ComponentFixture<ListarPedidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPedidosComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
