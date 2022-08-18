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
  usuario = { id: "", nombre: "", apellido: "", titulo: "", descripcion: "" };

  mensaje: string = "Errorr";

  experiencias: any = [];
  experiencia = { id: "", empresa: "", puesto: "", fechaDesde: "", fechaHasta: "", tareas: "" };

  educaciones: any = [];
  educacion = { id: "", universidad: "", titulo: "", fecha_desde: "", fecha_hasta: "" };

  dato: any = [];

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
        console.log(res)
      },
      err => console.log(err)
    )


    this.usuarioCargarDatos();

    this.usuarioService.listarExperiencias().subscribe(
      res => {
        this.experiencias = res;
      },
      err => console.log(err)
    )

    this.usuarioService.listarEducaciones().subscribe(
      res => {
        this.educaciones = res;
      },
      err => console.log(err)
    )

    this.dato = localStorage.getItem('email');

  }

  usuarioCargarDatos() {
    this.usuarioService.buscarUsuario("1").subscribe(
      res => {
        this.usuarios = res;
      },
      err => console.log(err)
    );

  }


  crearExperiencia() {
    this.usuarioService.crearExperiencia(this.experiencia).subscribe(
      res => {
        let result: any = res;
        window.location.reload();
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }


  eliminarExperiencia(experiencia: string) {
    this.usuarioService.eliminarExperiencia(experiencia).subscribe(
      res => {
        let result: any = res;
        window.location.reload();
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
        window.location.reload();
      },
      err => {
        console.log(err.error.message);
      }
    )
  }


  crearEducacion() {
    this.usuarioService.crearEducacion(this.educacion).subscribe(
      res => {
        let result: any = res;
        window.location.reload();
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }

  eliminarEducacion(educacion: string) {
    this.usuarioService.eliminarEducacion(educacion).subscribe(
      res => {
        let result: any = res;
        window.location.reload();
      },
      err => {
        console.log(this.mensaje);
      }
    )
  }

  modificarDatosEducacion(educacion: any) {
    this.usuarioService.modificarDatosEducacion(educacion).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err.error.message);
      }
    )
  }

  modificarDatosPersona(persona: any) {
    this.usuarioService.modificarDatosPersona(persona).subscribe(
      res => {
        console.log(res);
        window.location.reload();
      },
      err => {
        console.log(err.error.message);
      }
    )
  }



}
