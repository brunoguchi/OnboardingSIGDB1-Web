import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}