import { templateSourceUrl } from '@angular/compiler';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { Cargo } from '../_models/Cargo';
import { CargoService } from '../_services/cargo.service';

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

  constructor(private cargoService: CargoService,
    private modalService: BsModalService,
    private formBuilder: FormBuilder
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
      this.cargo = Object.assign({}, this.registerForm.value);
      this.cargoService.postCargo(this.cargo).subscribe(
        (response: any) => {
          console.log(response);
          template.hide();
          this.getCargos();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  validation() {
    this.registerForm = this.formBuilder.group({
      descricao: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }
}
