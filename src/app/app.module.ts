import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import  { RouterModule, Routes } from '@angular/router';
import { appRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TasksItemComponent } from './components/tasks-item/tasks-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { DatosPersonalesComponent } from './components/datos-personales/datos-personales.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { UsuarioService } from './service/usuario.service';
import { InterceptorService } from './service/interceptor.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TasksItemComponent,
    AddTaskComponent,
    AboutComponent,
    FooterComponent,
    RegistrarComponent,
    IngresarComponent,
    PortfolioComponent,
    DatosPersonalesComponent,
    SkillsComponent,
    ProyectosComponent, 
    
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    //RouterModule.forRoot(appRoute, {enableTracing: true}),
    ReactiveFormsModule,
    appRoutingModule,
    NgbModule
    
  ],
  providers: [
    UsuarioService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi:true}
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
