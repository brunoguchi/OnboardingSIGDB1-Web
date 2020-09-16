import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Empresa } from '../_models/Empresa';

@Injectable()
export class EmpresaService {

  baseUrl = 'http://localhost:5000/api/Empresas';

  constructor(private http: HttpClient) { }

  getAllEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`);
  }

  postEmpresa(empresa: Empresa) {
    return this.http.post(this.baseUrl, empresa);
  }

  putEmpresa(empresa: Empresa) {
    return this.http.put(`${this.baseUrl}/${empresa.id}`, empresa);
  }

  deleteEmpresa(id: number) {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

}
