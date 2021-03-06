import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'admin',component:AdminComponent},
  {path:'user/:username',component:UserComponent},
  {path:'user',component:UserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
