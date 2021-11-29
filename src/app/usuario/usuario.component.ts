import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { PrestamoService } from '../services/prestamo.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

  public form!: FormGroup;
  valorPrestamo: number = 0;
  fechaLimite: Date = new Date;
  estado: String = '';
  cantidad: any;

  constructor(
    public formBuilder: FormBuilder,
    public prestamoService: PrestamoService,
    private router: Router
  ) { 
    this.formularios();
  }

  ngOnInit(): void {
    this.prestamoService.getAll().subscribe((data: any) => this.cantidad = data);

    this.estado = this.getRandom() == 1 ? 'Aprobado' : 'Pendiente';
  }

  get nombre() {
    return this.form.get('nombre');
  }

  get email() {
    return this.form.get('email');
  }

  get cedula() {
    return this.form.get('cedula');
  }

  formularios(){
    this.form = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cedula: ['', [Validators.required, Validators.minLength(6)]],
      estado: ['', Validators.required]
    });
  }

  getValor(event: number){
    this.valorPrestamo = event;
  }

  getFecha(event: Date){
    this.fechaLimite = event;
  }

  getRandom(): number {
    if ((Math.floor(Math.random() * (10 - 1)) + 1) < 5) {
       return 1
    } else {
       return 0
    }
 }

  guardarForm(e: Event) {
    e.preventDefault();
    let formFinal = {
      id: this.cantidad.length + 1,
      nombre: this.form.value.nombre,
      email: this.form.value.email,
      cedula: this.form.value.cedula,
      valor_prestamo: this.valorPrestamo,
      fecha_limite: this.fechaLimite,
      estado: this.form.value.estado
    }
    let monto_base = {
      id: 1,
      monto_base: environment.capital_base - this.valorPrestamo
    };
    this.prestamoService.create(formFinal).subscribe((data: any) => {
      this.prestamoService.updateMonto(1, monto_base).subscribe((data: any) =>[]);
      alert('Usuario guardado exitosamente');
      this.router.navigateByUrl('/');
    });
  }

}
