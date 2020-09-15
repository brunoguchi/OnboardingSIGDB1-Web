import { templateSourceUrl } from '@angular/compiler';
import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Cargo } from '../_models/Cargo';
import { CargoService } from '../_services/cargo.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
  cargos: Cargo[];
  cargo: Cargo;
  modalRef: BsModalRef;
  registerForm: FormGroup;
  modoSalvar = 'post';
  bodyDeletarCargo = '';
  headerCadastroEdicao = '';
  tituloPagina = 'Cargos';

  constructor(private cargoService: CargoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.validation();
    this.getCargos();
  }

  openModal(template: any) {
    this.registerForm.reset();
    template.show();
  }

  getCargos() {
    this.cargoService.getAllCargos().subscribe(
      (_cargos: Cargo[]) => {
        this.cargos = _cargos;
        console.log(_cargos);
      },
      error => {
        console.log(error);
      }
    );
  }

  salvarAlteracao(template: any) {
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.cargo = Object.assign({}, this.registerForm.value);
        this.cargoService.postCargo(this.cargo).subscribe(
          (response: any) => {
            console.log(response);
            template.hide();
            this.getCargos();
            this.toastr.success('Registrado com sucesso');
          },
          error => {
            console.log(error);
          }
        );
      } else {
        this.cargo = Object.assign({ id: this.cargo.id }, this.registerForm.value);
        this.cargoService.putCargo(this.cargo).subscribe(
          (response: any) => {
            console.log(response);
            template.hide();
            this.getCargos();
            this.toastr.success('Editado com sucesso');
          },
          error => {
            console.log(error);
          }
        );
      }
    }
  }

  editarCargo(cargo: Cargo, template: any) {
    this.modoSalvar = 'put';
    this.headerCadastroEdicao = 'Editar cargo';
    this.openModal(template);
    this.cargo = cargo;
    this.registerForm.patchValue(cargo);
  }

  novoCargo(template: any) {
    this.modoSalvar = 'post';
    this.headerCadastroEdicao = 'Cadastrar cargo';
    this.openModal(template);
  }

  excluirCargo(cargo: Cargo, template: any) {
    this.openModal(template);
    this.cargo = cargo;
    this.bodyDeletarCargo = `Tem certeza que deseja excluir o Cargo: ${cargo.descricao}, Código: ${cargo.id}`;
  }

  confirmeDelete(template: any) {
    this.cargoService.deleteCargo(this.cargo.id).subscribe(
      () => {
        template.hide();
        this.getCargos();
        this.toastr.success('Deletado com sucesso');
      }, error => {
        console.log(error);
      }
    );
  }

  validation() {
    this.registerForm = this.formBuilder.group({
      descricao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }
}
