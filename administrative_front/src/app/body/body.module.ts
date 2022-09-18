import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';

import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { LogComponent } from './pages/log/log.component';
import { GmodelsComponent } from './pages/gmodels/gmodels.component';
import { PrincipalComponent } from './principal/principal.component';




@NgModule({
  declarations: [
    SolicitudComponent,
    LogComponent,
    GmodelsComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule
  ]
})
export class BodyModule { }
