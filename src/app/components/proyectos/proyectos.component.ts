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

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.listarProyectos().subscribe(
      res => {
        this.proyectos = res;
        console.log(res);
      },
      err => console.log(err)
    )
  }

}
