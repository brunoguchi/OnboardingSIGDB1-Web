import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CargosComponent } from './cargos/cargos.component';
import { NavComponent } from './nav/nav.component';

import { AlertModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CargoService } from './_services/cargo.service';

@NgModule({
  declarations: [
    AppComponent,
      CargosComponent,
      NavComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [CargoService],
  bootstrap: [AppComponent]
})

export class AppModule { }
