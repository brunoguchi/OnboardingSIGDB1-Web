import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Cargo } from '../_models/Cargo';

@Injectable()
export class CargoService {

  baseUrl = 'http://localhost:5000/api/Cargos';

  constructor(private http: HttpClient) { }

  getAllCargos(): Observable<Cargo[]> {
    return this.http.get<Cargo[]>(this.baseUrl);
  }

  getCargoById(id: number): Observable<Cargo> {
    return this.http.get<Cargo>(`${this.baseUrl}/${id}`);
  }

  postCargo(cargo: Cargo) {
    return this.http.post(this.baseUrl, cargo);
  }

  putCargo(cargo: Cargo) {
    return this.http.put(`${this.baseUrl}/${cargo.id}`, cargo);
  }

  deleteCargo(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
