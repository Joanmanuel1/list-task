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
    this.usuarioService.buscarUsuarioEmail(this.email).subscribe(
      res => {
        let result: any = res;   
        console.log(result);
        if( result == true){
          this.loguear();
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

  loguear(){
    localStorage.setItem('email', this.email);
  }



}
