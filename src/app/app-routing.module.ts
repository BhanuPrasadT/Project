import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddusersComponent } from './addusers/addusers.component';
import { ListusersComponent } from './listusers/listusers.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{path:'listusers',component:ListusersComponent},
{path:'login',component:LoginComponent},
{path:'addusers',component:AddusersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
