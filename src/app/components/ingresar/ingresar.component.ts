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
  email: string = "";
  reintentar: boolean = false;
  reintentarImp = "message from parent";
  persona = {id: "1", logueado: "1"};
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
    console.log("Sign In");
    console.log(this.email);
    this.usuarioService.buscarUsuarioEmail(this.email).subscribe(
      res => {
        let result: any = res;   
        console.log(result);
        if( result == true){
          //localStorage.setItem('Email', this.email)
          this.modificarDatosLogueo();
          this.router.navigate(['']);
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

  estaLogueado(){
    let email = sessionStorage.getItem(this.email)
    console.log(this.email);
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


  /*


  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
  onEnviar(event:Event){
    event.preventDefault;
    this.autenticacionService.IniciarSesion(this.form.value).subscribe(data=> {
      console.log("DATA: " + JSON.stringify(data));
      this.ruta.navigate(['/portfolio']);
    })
  }
  */


}
