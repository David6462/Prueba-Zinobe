import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-prestamos',
  templateUrl: './prestamos.component.html',
  styleUrls: ['./prestamos.component.scss']
})
export class PrestamosComponent implements OnInit {
  @Output() valorPrestamo = new EventEmitter<number>();
  @Output() fechaLimite = new EventEmitter<Date>();

  valorEnviar: number = 0;
  fechaEnviar: Date = new Date();

  constructor() { }

  async ngOnInit() {
  }

  enviarValor(){
    this.valorPrestamo.emit(this.valorEnviar);
  }

  enviarFecha(){
    this.fechaLimite.emit(this.fechaEnviar);
  }

}
