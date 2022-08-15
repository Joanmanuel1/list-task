import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos: any = [];
  proyecto = {id: "", nombre: "", descripcion: "", fechaRealizacion: "", enlacePagina: "" };
  datosNuevosProyecto: any = {id: "", nombre: "", descripcion: "", fechaRealizacion: "", enlacePagina: ""  };


  mensaje: string = "Error en proyectos";


  constructor(private usuarioService: UsuarioService, private router: Router) {

   }

  ngOnInit(): void {
    this.usuarioService.listarProyectos().subscribe(
      res => {
        this.proyectos = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

  modificarDatosProyecto(proyecto: any) {
    this.usuarioService.modificarDatosProyecto(proyecto).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.error.message);
      }
      )
    }

    crearProyecto(){
      this.usuarioService.crearProyecto(this.proyecto).subscribe(
        res => {
          let result: any = res;
          this.router.navigate(['']);
        },
        err => {
          console.log(this.mensaje);
        }
      )
    }
  
    
    eliminarProyecto(proyecto: string){
      this.usuarioService.eliminarProyecto(proyecto).subscribe(
        res => {
          let result: any = res;
        },
        err => {
          console.log(this.mensaje);
        }
      )
    }




}


