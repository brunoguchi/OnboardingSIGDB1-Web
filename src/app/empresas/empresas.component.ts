import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService, BsLocaleService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Empresa } from '../_models/Empresa';
import { EmpresaFiltro } from '../_models/EmpresaFiltro';
import { EmpresaService } from '../_services/empresa.service';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  tituloPagina = 'Empresas';
  empresas: Empresa[];
  registerForm: FormGroup;
  filterForm: FormGroup;
  empresa: Empresa;
  empresaFiltro: EmpresaFiltro;
  modalRef: BsModalRef;
  modoSalvar = 'post';
  bodyDeletarEmpresa = '';
  headerCadastroEdicao = '';

  constructor(private empresaService: EmpresaService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private localeService: BsLocaleService) {
      defineLocale('pt-br', ptBrLocale);
      this.localeService.use('pt-Br');
  }

  ngOnInit() {
    this.validation();
    this.getEmpresas();
  }

  getEmpresas() {
    this.empresaService.getAllEmpresas().subscribe(
      (_empresas: Empresa[]) => {
        this.empresas = _empresas;
        console.log(_empresas);
      },
      error => {
        console.log(error);
      }
    );
  }

  salvarAlteracao(template: any) {

  }

  editarEmpresa(empresa: Empresa, template: any) {

  }

  novoEmpresa(template: any) {

  }

  excluirEmpresa(empresa: Empresa, template: any) {

  }

  confirmeDelete(template: any) {

  }

  filtrarEmpresas() {
    this.empresaFiltro = Object.assign({}, this.filterForm.value);

    this.empresaService.getEmpresasPorFiltro(this.empresaFiltro).subscribe(
      (_empresas: Empresa[]) => {
        this.empresas = _empresas;
        console.log(_empresas);
      },
      error => {
        console.log(error);
      }
    );
  }

  validation() {
    this.registerForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });

    this.filterForm = this.formBuilder.group({
      nome: [''], cnpj: [''], dataInicio: [''], dataFim: ['']
    });
  }
}
