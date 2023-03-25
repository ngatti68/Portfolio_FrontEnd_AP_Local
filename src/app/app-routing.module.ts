import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAboutComponent } from './about/edit-about.component';
import { LoginComponent } from './auth/login.component';
import { EditBannerComponent } from './banner/edit-banner.component';
import { GuardService } from './services/guard.guard';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { HomeComponent } from './home/home.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { AdminComponent } from './users/admin.component';
import { UserComponent } from './users/user.component';
import { NuevaEducacionComponent } from './educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { NuevaHabilidadComponent } from './habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'home', component: HomeComponent},
  
  // utilizamos canActivate
  {path: 'editbanner/:id', component:EditBannerComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},  
  {path: 'editabout/:id', component:EditAboutComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'nuevaexp', component:NuevaExperienciaComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'editexp/:id', component:EditarExperienciaComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'nuevaedu', component:NuevaEducacionComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'editedu/:id', component:EditarEducacionComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'nuevahab', component:NuevaHabilidadComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'edithab/:id', component:EditarHabilidadComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'nuevoproy', component:NuevoProyectoComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  {path: 'editproy/:id', component:EditarProyectoComponent, canActivate:[GuardService], data: { expectedRol: ['admin']}},
  
  // user y admin

  {path: 'admin', component: AdminComponent, canActivate: [GuardService], data: {expectedRol: ['admin']}},
  {path: 'user', component: UserComponent, canActivate: [GuardService], data: {expectedRol: ['user']}},
  
  // rutas a login y registro
  {path: 'login', component:LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '', redirectTo:'login', pathMatch:'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }