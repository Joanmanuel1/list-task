import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { thresholdSturges, timeThursdays } from 'd3';
import { Component, OnInit, Input } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ingresar',
  templateUrl: './ingresar.component.html',
  styleUrls: ['./ingresar.component.css']
})
export class IngresarComponent implements OnInit {

  mensaje: string = "Errorr";
  reintentar: boolean = false;

  email: any = [];
  password: any = [];

  errorPassword = 0;
  errorEmail = 0;


  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) {

  }

  ngOnInit(): void {

  }


  login() {
    this.buscarEmail();
    //this.buscarContrasena();

  }

  buscarEmail() {

    this.usuarioService.buscarUsuarioEmail(this.email).subscribe(
      res => {
        let result: any = res;
        if (result == true) {
          this.buscarContrasena()
        }
        else {
          this.reintentar = true;
        }
      },
      err => {
        this.reintentar = true;
      }
    )
  }

  buscarContrasena() {
    this.usuarioService.buscarUsuarioContrasena(this.password).subscribe(
      res => {
        let result: any = res;
        if (result == true) {
          this.loguearEmail();
          this.loguearContrasena();
          this.router.navigate([''])
            .then(() => {
              window.location.reload();
            });
        }
        else {
          this.reintentar = true;
        }
      },
      err => {
        this.reintentar = true;
      }
    )
  }

  recargarForm() {
    this.reintentar = false;
    this.email = "";
    this.password = "";
  }

  loguearEmail() {
    localStorage.setItem('email', this.email);
  }
  loguearContrasena() {
    localStorage.setItem('contrasena', this.password);
  }

  verificarForm(): boolean {
    this.errorPassword = this.verificarPassword(this.password);
    this.errorEmail = this.verificarEmail(this.email);
    if ((this.errorPassword + this.errorEmail) > 0) {
      return false;
    }
    return true;
  }

  //[A-Z][A-Za-z0-9]
  verificarPassword(password: any): number {
    const patron = /^[A-Za-z0-9]{6,20}$/;
    if (password.length == 0)
      return 1;
    if (password.length > 20)
      return 2;
    if (password.length < 6)
      return 3;
    if (!patron.test(password))
      return 4;
    return 0;
  }

  verificarEmail(email: any): number {
    const patron = /^[\w.\-]{1,20}@[a-z0-9]{1,10}\.[a-z]{2,3}$/;
    if (email.length == 0)
      return 1;
    if (email.length > 50)
      return 2;
    return 0;
  }

  limpiarPassword() {
    if (this.errorPassword > 0) {
      this.errorPassword = 0;
    }
  }

  limpiarEmail() {
    if (this.errorEmail > 0) {
      this.email = "";
      this.errorEmail = 0;
    }
  }

}
