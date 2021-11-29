import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.scss']
})
export class ListarUsuariosComponent implements OnInit {
  datos: [] = [];

  constructor(private prestamoService: PrestamoService) { }

  ngOnInit(): void {
    this.getIndex();
  }

  getIndex(): void {
    this.prestamoService.getAll().subscribe((data: any) => {
      this.datos = data
    });
  }

  editarPrestamo(item: any) {
    console.log(item);
    let prestamoEdit = {
      id: item['id'],
      nombre: item['nombre'],
      email: item['email'],
      cedula: item['cedula'],
      valor_prestamo: item['valor_prestamo'],
      fecha_limite: item['fecha_limite'],
      estado: "Pagado"
    };
    let monto_base = {
      id: 1,
      monto_base: environment.capital_base + item['valor_prestamo']
    };

    this.prestamoService.update(item['id'], prestamoEdit).subscribe((data: any) => [
      this.prestamoService.updateMonto(1, monto_base).subscribe((data: any) =>[]),
      this.getIndex()
    ]);
  }
}
