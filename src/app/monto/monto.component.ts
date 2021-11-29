import { Component, Input, OnInit } from '@angular/core';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-monto',
  templateUrl: './monto.component.html',
  styleUrls: ['./monto.component.scss']
})
export class MontoComponent implements OnInit {
  datos: number = 0;

  constructor(private prestamoService: PrestamoService) { }

  ngOnInit() {
    this.prestamoService.getMonto().subscribe((data: any) => {
      this.datos = data[0]['monto_base']
    });
  }

}
