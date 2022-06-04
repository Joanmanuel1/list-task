import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../service/usuario.service';
import { Router } from '@angular/router'
import {NgbProgressbarConfig} from '@ng-bootstrap/ng-bootstrap';





@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  

  softSkills: any = [];
  softSkill = {id: "", habilidad: "", porcentaje: "" };
  datosNuevossoftSkills: any = {id: "", habilidad: "", porcentaje: ""  };

  hardSkills: any = [];
  hardSkill = {id: "", habilidad: "", porcentaje: "" };
  datosNuevoshardSkills: any = {id: "", habilidad: "", porcentaje: ""  };


  constructor(private usuarioService: UsuarioService, private router: Router, private config:NgbProgressbarConfig) {
    config.showValue=true,
    config.type="info",
    config.animated=false,
    config.striped=true

   }

  ngOnInit(): void {
    this.usuarioService.listarSoftSkills().subscribe(
      res => {
        this.softSkills = res;
        console.log(res);
      },
      err => console.log(err)
    )

    this.usuarioService.listarHardSkills().subscribe(
      res => {
        this.hardSkills = res;
        console.log(res);
      },
      err => console.log(err)
    )
    this.config.animated=true;

  }


}
