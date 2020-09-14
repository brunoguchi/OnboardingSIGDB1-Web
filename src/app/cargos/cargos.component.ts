import { Component, OnInit, TemplateRef } from '@angular/core';
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
  modalRef: BsModalRef;

  constructor(private cargoService: CargoService,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    this.getCargos();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  getCargos() {
    this.cargoService.getAllCargos().subscribe(
      (_cargos: Cargo[]) => {
        this.cargos = _cargos;
        console.log(_cargos);
      },
      error => {
        console.log(error);
        console.log(this.cargos);
      }
    );
  }
}
