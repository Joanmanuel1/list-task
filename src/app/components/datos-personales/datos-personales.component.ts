import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  usuarios: any = [];
  usuarioID = 1;
  
  UsuarioID: any = [];
  Usuario: any = [];


  mensaje: string = "Errorr";


  experiencias: any = [];
  experienciaId: any = [];
  experiencia = {id: "", empresa: "", puesto: "", fechaDesde: "", fechaHasta:"", tareas:"" };
  datosNuevosExperiencia: any ={empresa: "test", puesto: "test", fecha_desde: "test", fecha_hasta: "test", tareas: "test"};

  educaciones: any = [];
  educacion = {id: "", universidad: "", titulo: "", fecha_desde: "", fecha_hasta:"" };
  datosNuevosEducacion: any = {id: "", universidad: "", titulo: "", fecha_desde: "", fecha_hasta:"" };



  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {

    /*
      this.usuarioService.listarUsuarios().subscribe({
        next: (v) => this.usuarios = v, 
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      })
    */

    this.usuarioService.listarUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log(res);
      },
      err => console.log(err)
    )


    this.usuarioCargarDatos();

    this.usuarioService.listarExperiencias().subscribe(
      res => {
        this.experiencias = res;
        console.log(res);
      },
      err => console.log(err)
    )

    this.usuarioService.listarEducaciones().subscribe(
      res => {
        this.educaciones = res;
        console.log(res);
      },
      err => console.log(err)
    )


  }

  usuarioCargarDatos() {
    this.usuarioService.buscarUsuario("1").subscribe(
      res => {
        this.Usuario = res;
        console.log("Buscar usuario 1", this.Usuario);
      },
      err => console.log(err)
    );

  }



  crearExperiencia(){
    this.usuarioService.crearExperiencia(this.experiencia).subscribe(
      res => {
        let result: any = res;
        this.router.navigate(['']);
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }

  
  eliminarExperiencia(experiencia: string){
    this.usuarioService.eliminarExperiencia(experiencia).subscribe(
      res => {
        let result: any = res;
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }


  eliminarEducacion(educacion: string){
    this.usuarioService.eliminarEducacion(educacion).subscribe(
      res => {
        let result: any = res;
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }



  modificarDatosExperiencia(experiencia: any) {
    this.usuarioService.modificarDatosExperiencia(experiencia).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err.error.message);
      }
    )
  }



}
