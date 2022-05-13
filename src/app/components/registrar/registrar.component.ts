import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  user = { nombre: "", apellido: "", edad: "" };
  mensaje: string = "Vacio";

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {

  }


  registrar() {
    this.usuarioService.registrar(this.user).subscribe(
      res => {
        let result: any = res;
      },
      err => {
        this.mensaje = String(err.error.message);
      }
    )
  }



}
