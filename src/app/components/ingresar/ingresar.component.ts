import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeThursdays } from 'd3';
import { Component, OnInit, Input  } from '@angular/core';
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
  contrasena: any = [];
  //form: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private usuarioService: UsuarioService) {
/*
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        deviceInfo: this.formBuilder.group({
          deviceId: ["17867868768"],
          deviceType: ["DEVICE_TYPE_ANDROID"],
          notificationToken: ["67657575eececc34"]
        })
      }
    )
*/
  }

  ngOnInit(): void {

  }


  login() {
    this.buscarEmail();
    this.buscarContrasena();

  }

  buscarEmail(){
    this.usuarioService.buscarUsuarioEmail(this.email).subscribe(
      res => {
        let result: any = res;   
        console.log(result);
        if( result == true){
          this.loguearEmail();
        }
        else{
          console.log(this.mensaje)
          this.reintentar=true;
        }
      },
      err => {
        console.log(this.mensaje);
        this.reintentar=true;
      }
    )
  }
  buscarContrasena(){
    this.usuarioService.buscarUsuarioContrasena(this.contrasena).subscribe(
      res => {
        let result: any = res;   
        console.log(result);
        if( result == true){
          this.loguearContrasena();
          this.router.navigate([''])
          .then(() => {
            window.location.reload();
          });
        }
        else{
          console.log(this.mensaje)
          this.reintentar=true;
        }
      },
      err => {
        console.log(this.mensaje);
        this.reintentar=true;
      }
    )
  }

  recargarForm(){
    this.reintentar=false;
    this.email="";
    //this.user.password="";
  }

  loguearEmail(){
    localStorage.setItem('email', this.email);
  }
  loguearContrasena(){
    localStorage.setItem('contrasena', this.contrasena);
  }


}
