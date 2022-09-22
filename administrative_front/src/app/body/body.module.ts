import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyRoutingModule } from './body-routing.module';

import { MatTableModule } from '@angular/material/table';  
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';

import { MatSelectModule } from '@angular/material/select';

import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { LogComponent } from './pages/log/log.component';
import { GmodelsComponent } from './pages/gmodels/gmodels.component';
import { PrincipalComponent } from './principal/principal.component';
import {MatSortModule} from '@angular/material/sort';
import { AddModelComponent } from './subpages/add-model/add-model.component';
import { SeeRequestDetailComponent } from './subpages/see-request-detail/see-request-detail.component';
import { SeeCommentsComponent } from './subpages/see-comments/see-comments.component';





@NgModule({
  declarations: [
    SolicitudComponent,
    LogComponent,
    GmodelsComponent,
    PrincipalComponent,
    AddModelComponent,
    SeeRequestDetailComponent,
    SeeCommentsComponent
  ],
  imports: [
    CommonModule,
    BodyRoutingModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule
  ]
})
export class BodyModule { }
