import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { IngresarComponent } from "./components/ingresar/ingresar.component"
import { TasksComponent } from "./components/tasks/tasks.component"
import { AboutComponent } from "./components/about/about.component"
import { RegistrarComponent } from "./components/registrar/registrar.component"
import { PortfolioComponent } from "./components/portfolio/portfolio.component"


const appRoute:Routes = [
    { path: 'task', component: TasksComponent},
    { path: 'about', component: AboutComponent},
    { path: 'ingresar', component: IngresarComponent},
    { path: 'registrar', component: RegistrarComponent},
    { path: 'portfolio', component: PortfolioComponent},
    { path: '', redirectTo:'portfolio', pathMatch:'full'}
  ];

  @NgModule({
      imports: [RouterModule.forRoot(appRoute)],
      exports: [RouterModule]
  })
  export class appRoutingModule {}