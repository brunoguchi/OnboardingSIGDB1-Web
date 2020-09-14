import { Component, OnInit } from '@angular/core';
import { Cargo } from '../_models/Cargo';
import { CargoService } from '../_services/cargo.service';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
  cargos: Cargo[];

  constructor(private cargoService: CargoService) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.cargoService.getAllCargos().subscribe(
      (_cargos: Cargo[]) => {
        this.cargos = _cargos;
        console.log(_cargos);
      },
      error => { console.log(error); }
    );
  }
}
