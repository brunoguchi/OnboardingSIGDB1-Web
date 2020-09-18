import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Empresa } from '../_models/Empresa';
import { EmpresaFiltro } from '../_models/EmpresaFiltro';

@Injectable()
export class EmpresaService {

  parametros: String = '';
  baseUrl = 'http://localhost:5000/api/Empresas';

  constructor(private http: HttpClient) { }

  getAllEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.baseUrl);
  }

  getEmpresaById(id: number): Observable<Empresa> {
    return this.http.get<Empresa>(`${this.baseUrl}/${id}`);
  }

  getEmpresasPorFiltro(filtro: EmpresaFiltro): Observable<Empresa[]> {
    this.parametros = '';

    if (filtro.nome && filtro.nome !== '') {
      this.parametros = this.parametros + `Nome=${filtro.nome}`;
    }

    if (filtro.cnpj && filtro.cnpj !== '') {
      this.parametros = this.parametros + `&Cnpj=${filtro.cnpj}`;
    }

    if (filtro.dataInicio) {
      this.parametros = this.parametros + `&DataInicio=${filtro.dataInicio.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' )}`;
    }

    if (filtro.dataFim) {
      this.parametros = this.parametros + `&DataFim=${filtro.dataFim.toLocaleDateString('pt-br').split( '/' ).reverse( ).join( '-' )}`;
    }

    if (this.parametros.startsWith('&')) {
      this.parametros = this.parametros.substring(1);
    }

    console.log(filtro);
    return this.http.get<Empresa[]>(`${this.baseUrl}/pesquisar?${this.parametros}`);
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
