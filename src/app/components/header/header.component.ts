import { Component, OnInit, Input } from '@angular/core';
import { UiService } from 'src/app/service/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IngresarComponent } from '../ingresar/ingresar.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = 'Nuestra Lista de Tareas';
  showAddTask: boolean = false;
  subscription?: Subscription;

  usuarioID = 1;
  Usuario: any = [];
  
  persona = {id: "1", logueado: "0"};


  constructor(private uiService: UiService, private router: Router, private usuarioService: UsuarioService) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value)
  }

  ngOnInit(): void {
    this.usuarioService.buscarUsuario("1").subscribe(
      res => {
        this.Usuario = res;
      },
      err => console.log(err)
    );
  }

  modificarDatosLogueo() {
    console.log(this.persona);
    this.usuarioService.modificarDatosLogueo(this.persona).subscribe(
      res => {
        //let result: any = res;
        window.location.reload();
        console.log(res);
      },
      err => {
        console.log(err.error.message);
      }
      )
    }


  toggleAddTask(){
    this.uiService.toggleAddTask();
  }

  hasRoute(route:string){
    return this.router.url === route
  }

}
