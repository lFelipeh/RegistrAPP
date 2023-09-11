import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarRolPage } from './seleccionar-rol.page';

describe('SeleccionarRolPage', () => {
  let component: SeleccionarRolPage;
  let fixture: ComponentFixture<SeleccionarRolPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SeleccionarRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
