import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tituloPagina = 'OnboardSIGDB1 - Frontend - Works!';

  constructor() { }

  ngOnInit() {
  }

}
