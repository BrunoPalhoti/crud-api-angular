import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudFormComponent } from './crud-form/crud-form.component';
import { CrudListComponent } from './crud-list/crud-list.component';

const routes: Routes = [
  { path: 'list', component: CrudListComponent}, // lista
  { path: 'form', component: CrudFormComponent}, // criar
  { path: 'form/:id', component: CrudFormComponent} // alterar
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudRoutingModule { }
