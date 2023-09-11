import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DuenoVehiculoPage } from './dueno-vehiculo.page';

describe('DuenoVehiculoPage', () => {
  let component: DuenoVehiculoPage;
  let fixture: ComponentFixture<DuenoVehiculoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DuenoVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
