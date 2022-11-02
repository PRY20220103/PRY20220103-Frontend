import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './pages/login/login.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'login', component: LoginModule},
      {path: '**', component: LoginModule}
    ]
  }
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
