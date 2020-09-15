import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CargosComponent } from './cargos/cargos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FuncionariosComponent } from './funcionarios/funcionarios.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cargos', component: CargosComponent },
  { path: 'empresas', component: EmpresasComponent },
  { path: 'funcionarios', component: FuncionariosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
