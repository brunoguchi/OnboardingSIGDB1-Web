import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cargos',
  templateUrl: './cargos.component.html',
  styleUrls: ['./cargos.component.css']
})
export class CargosComponent implements OnInit {
  cargos: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getCargos();
  }

  getCargos() {
    this.http.get('http://localhost:5000/api/Cargos').subscribe(
      response => {
        this.cargos = response;
        console.log(response);
      },
      error => { console.log(error); }
    );
  }

}
