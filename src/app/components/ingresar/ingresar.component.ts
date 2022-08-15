import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { timeThursdays } from 'd3';
import { Component, OnInit } from '@angular/core';
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
