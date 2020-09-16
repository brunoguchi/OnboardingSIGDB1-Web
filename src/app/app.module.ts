import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CargosComponent } from './cargos/cargos.component';
import { NavComponent } from './nav/nav.component';

import { AlertModule, BsDatepickerModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CargoService } from './_services/cargo.service';
import { ReactiveFormsModule } from '@angular/forms';
import { EmpresasComponent } from './empresas/empresas.component';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TituloPaginaComponent } from './_shared/titulo-pagina/titulo-pagina.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';
import { EmpresaService } from './_services/empresa.service';
import { DateTimeFormatterPipe } from './_helpers/DateTimeFormatter.pipe';

@NgModule({
  declarations: [
    AppComponent,
      CargosComponent,
      NavComponent,
      EmpresasComponent,
      DashboardComponent,
      TituloPaginaComponent,
      FuncionariosComponent,
      DateTimeFormatterPipe
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    CargoService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
