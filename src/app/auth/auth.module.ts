import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './pages/login/login.module';



@NgModule({
  declarations: [
    LoginModule
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
