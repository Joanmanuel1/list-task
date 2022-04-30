import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import  { RouterModule, Routes } from '@angular/router';


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


const appRoute:Routes = [
  { path: 'task', component: TasksComponent},
  { path: 'about', component: AboutComponent},
  { path: 'ingresar', component: IngresarComponent},
  { path: 'registrar', component: RegistrarComponent},
  { path: '', component: PortfolioComponent},
]

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
    
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoute, {enableTracing: true}),
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
