import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia, Usuario } from '../model/usuarioModel';


@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	API_URI = 'http://localhost:8080';
	constructor(private http: HttpClient, private router: Router) { }

	user = { id: "" };
	experiencias = { id: "" };
	educaciones = { id: "" };
	hardSkills = { id: "" };
	softSkills = { id: "" };
	proyectos = { id: "" };

	/* CRUD USUARIOS */

	listarUsuarios() {
		//return this.http.get(`${this.API_URI}/personas/traer`);
		return this.http.get(`http://localhost:8080/personas/traer`);

	}

	buscarUsuario(id: string) {
		//return this.http.get(`${this.API_URI}/personas/traer`);
		return this.http.get(`http://localhost:8080/personas/traerUno/${id}`);

	}

	registrar(usuario: any) {
		this.user = usuario;
		return this.http.post(`http://localhost:8080/personas/crear`, usuario, { responseType: 'text' });

	}

	modificarDatosPersona(persona: any) {
		return this.http.put(`http://localhost:8080/personas/editar/${persona.id}?nombre=${persona.nombre}&apellido=${persona.apellido}&titulo=${persona.titulo}&descripcion=${persona.descripcion}`, persona);
	}

	/* CRUD EXPERIENCIAS */
	buscarExperiencia(id: string) {
		//return this.http.get(`${this.API_URI}/personas/traer`);
		return this.http.get(`http://localhost:8080/experiencia/traerUno/${id}`);

	}

	listarExperiencias() {
		return this.http.get(`${this.API_URI}/experiencia/traer`);
	}

	crearExperiencia(experiencia: any) {
		this.experiencias = experiencia;
		return this.http.post(`http://localhost:8080/experiencia/crear`, experiencia, { responseType: 'text' });

	}

	eliminarExperiencia(id: string) {
		return this.http.delete(`http://localhost:8080/experiencia/borrar/${id}`, { responseType: 'text' });

	}

	modificarDatosExperiencia(experiencia: any) {
		return this.http.put(`http://localhost:8080/experiencia/editar/${experiencia.id}?empresa=${experiencia.empresa}&fechaDesde=${experiencia.fechaDesde}&fechaHasta=${experiencia.fechaHasta}&tareas=${experiencia.tareas}&puesto=${experiencia.puesto}`, experiencia);
	}

	

	/* CRUD EDUCACION */

	listarEducaciones() {
		return this.http.get(`${this.API_URI}/educacion/traer`);
	}

	eliminarEducacion(id: string) {
		return this.http.delete(`http://localhost:8080/educacion/borrar/${id}`, { responseType: 'text' });

	}

	crearEducacion(educacion: any) {
		this.educaciones = educacion;
		return this.http.post(`http://localhost:8080/educacion/crear`, educacion, { responseType: 'text' });

	}

	modificarDatosEducacion(educacion: any) {
		return this.http.put(`http://localhost:8080/educacion/editar/${educacion.id}?universidad=${educacion.universidad}&titulo=${educacion.titulo}&fechaDesde=${educacion.fechaDesde}&fechaHasta=${educacion.fechaHasta}`, educacion);
	}

	buscarEducacion(id: string) {
		return this.http.get(`http://localhost:8080/educacion/traerUno/${id}`);

	}


	/* CRUD SOFT SKILLS */

	listarSoftSkills() {
		return this.http.get(`${this.API_URI}/softSkills/traer`);
	}

	eliminarSoftSkill(id: string) {
		return this.http.delete(`http://localhost:8080/softSkills/borrar/${id}`, { responseType: 'text' });

	}

	crearSoftSkills(softSkill: any) {
		this.softSkills = softSkill;
		return this.http.post(`http://localhost:8080/softSkills/crear`, softSkill, { responseType: 'text' });

	}

	modificarDatosSoftSkill(softSkill: any) {
		return this.http.put(`http://localhost:8080/softSkills/editar/${softSkill.id}?habilidad=${softSkill.habilidad}&porcentaje=${softSkill.porcentaje}`, softSkill);
	}

	buscarSoftSkill(id: string) {
		return this.http.get(`http://localhost:8080/softSkills/traerUno/${id}`);

	}

	/* CRUD HARD SKILLS */

	listarHardSkills() {
		return this.http.get(`${this.API_URI}/hardSkills/traer`);
	}

	eliminarHardSkill(id: string) {
		return this.http.delete(`http://localhost:8080/hardSkills/borrar/${id}`, { responseType: 'text' });

	}

	crearHardSkill(hardSkill: any) {
		this.hardSkills = hardSkill;
		return this.http.post(`http://localhost:8080/hardSkills/crear`, hardSkill, { responseType: 'text' });

	}

	modificarDatosHardSkill(hardSkill: any) {
		return this.http.put(`http://localhost:8080/hardSkills/editar/${hardSkill.id}?habilidad=${hardSkill.habilidad}&porcentaje=${hardSkill.porcentaje}`, hardSkill);
	}

	buscarHardSkill(id: string) {
		return this.http.get(`http://localhost:8080/hardSkills/traerUno/${id}`);

	}

	/* CRUD PROYECTOS */
	listarProyectos() {
		return this.http.get(`${this.API_URI}/proyectos/traer`);
	}

	eliminarProyecto(id: string) {
		return this.http.delete(`http://localhost:8080/proyectos/borrar/${id}`, { responseType: 'text' });

	}

	crearProyecto(hardSkill: any) {
		this.hardSkills = hardSkill;
		return this.http.post(`http://localhost:8080/proyectos/crear`, hardSkill, { responseType: 'text' });

	}

	modificarDatosProyecto(proyecto: any) {
		return this.http.put(`http://localhost:8080/proyectos/editar/${proyecto.id}?nombre=${proyecto.nombre}&descripcion=${proyecto.descripcion}&fechaRealizacion=${proyecto.fechaRealizacion}&enlacePagina=${proyecto.enlacePagina}`, proyecto);
	}

	buscarProyecto(id: string) {
		return this.http.get(`http://localhost:8080/proyectos/traerUno/${id}`);

	}



}
