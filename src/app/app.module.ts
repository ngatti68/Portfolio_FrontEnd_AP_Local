import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BannerComponent } from './banner/banner.component';
import { EditBannerComponent } from './banner/edit-banner.component';
import { AboutComponent } from './about/about.component';
import { EditAboutComponent } from './about/edit-about.component';
import { interceptorProvider } from './services/interceptor.service';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { NuevaExperienciaComponent } from './experiencia/nueva-experiencia.component';
import { EditarExperienciaComponent } from './experiencia/editar-experiencia.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './users/user.component';
import { AdminComponent } from './users/admin.component';
import { EditarEducacionComponent } from './educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './educacion/nueva-educacion.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NuevaHabilidadComponent } from './habilidad/nueva-habilidad.component';
import { EditarHabilidadComponent } from './habilidad/editar-habilidad.component';
import { HabilidadComponent } from './habilidad/habilidad.component';
import { NuevoProyectoComponent } from './proyecto/nuevo-proyecto.component';
import { EditarProyectoComponent } from './proyecto/editar-proyecto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import  {  NgCircleProgressModule  }  from  'ng-circle-progress' ;


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent, 
    HeaderComponent, 
    PortfolioComponent,
    BannerComponent,
    EditBannerComponent,
    AboutComponent,
    EditAboutComponent,
    ExperienciaComponent,
    NuevaExperienciaComponent,
    EditarExperienciaComponent,
    HomeComponent,
    UserComponent,
    AdminComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    EducacionComponent,
    NuevaHabilidadComponent,
    EditarHabilidadComponent,
    HabilidadComponent,
    NuevoProyectoComponent,
    EditarProyectoComponent,
    ProyectoComponent,
    FooterComponent,
    RegistroComponent       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    HttpClientModule,
    NgCircleProgressModule . forRoot ({ 
    }),           
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
