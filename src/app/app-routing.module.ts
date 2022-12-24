import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { ListusersComponent } from './listusers/listusers.component';

const routes: Routes = [{path:'listusers',component:ListusersComponent},
{path:'addusers',component:AddusersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
