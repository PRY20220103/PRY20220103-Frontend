import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SolicitudComponent } from './pages/solicitud/solicitud.component'; 
import { PrincipalComponent } from './principal/principal.component';
import { LogComponent } from './pages/log/log.component';
import { GmodelsComponent } from './pages/gmodels/gmodels.component';
import { AddModelComponent } from './subpages/add-model/add-model.component';
import { SeeCommentsComponent } from './subpages/see-comments/see-comments.component';
import { SeeRequestDetailComponent } from './subpages/see-request-detail/see-request-detail.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'body', component: PrincipalComponent},
      {path: 'solicitud', component: SolicitudComponent},
      {path: 'models', component: GmodelsComponent},
      {path: 'logs', component: LogComponent},

      {path: 'models/add', component: AddModelComponent},
      {path: 'models/comments', component: SeeCommentsComponent},
      {path: 'solicitud/details', component: SeeRequestDetailComponent},


      {path: '**', component: PrincipalComponent},
    ]
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BodyRoutingModule { }
