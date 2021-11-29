import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PrestamoService {

  constructor(private http: HttpClient) { }

  getAll(): any {return this.http.get(`${environment.baseUrl}/`)};

  create(newPrestamo: any): any{return this.http.post(`${environment.baseUrl}/`, newPrestamo)}

  update(id: any, prestamoEdit: any): any { return this.http.put( `${environment.baseUrl}/${id}`, prestamoEdit)}

  updateMonto(id: any, monto_base: any): any { return this.http.put( `${environment.montoUrl}/${id}`, monto_base)}

  getMonto(): any {return this.http.get(`${environment.montoUrl}/`)};

}
