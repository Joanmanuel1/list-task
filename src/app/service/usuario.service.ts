import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Experiencia, Usuario } from '../model/usuarioModel';


@Injectable({
	providedIn: 'root'
})
export class UsuarioService {
	 //API_URI = 'https://portfolio-arg-programa.herokuapp.com'; 
	 API_URI = 'http://localhost:8080';

	constructor(private http: HttpClient, private router: Router) { }

	user = { id: "" };
	experiencias = { id: "" };
	educaciones = { id: "" };
	hardSkills = { id: "" };
	softSkills = { id: "" };
	proyectos = { id: "" };
	personas = {id: "" };

	/* CRUD USUARIOS */

	listarUsuarios() {
		return this.http.get(`${this.API_URI}/personas/traer`);
	}

	buscarUsuario(id: string) {
		return this.http.get(`${this.API_URI}/personas/traerUno/${id}`);
	}

	registrar(usuario: any) {
		this.user = usuario;
		return this.http.post(`${this.API_URI}/personas/crear`, usuario, { responseType: 'text' });
	}

	modificarDatosPersona(persona: any) {
		return this.http.put(`${this.API_URI}/personas/editar/${persona.id}?nombre=${persona.nombre}&apellido=${persona.apellido}&titulo=${persona.titulo}&descripcion=${persona.descripcion}`, persona);
	}

	modificarDatosLogueo(persona: any) {
		return this.http.put(`${this.API_URI}/personas/editarLogueo/${persona.id}?logueado=${persona.logueado}`, persona);
	}

	/* CRUD EXPERIENCIAS */
	buscarExperiencia(id: string) {
		return this.http.get(`${this.API_URI}/experiencia/traerUno/${id}`);
	}

	listarExperiencias() {
		return this.http.get(`${this.API_URI}/experiencia/traer`);
	}

	crearExperiencia(experiencia: any) {
		this.experiencias = experiencia;
		return this.http.post(`${this.API_URI}/experiencia/crear`, experiencia, { responseType: 'text' });
	}

	eliminarExperiencia(id: string) {
		return this.http.delete(`${this.API_URI}/experiencia/borrar/${id}`, { responseType: 'text' });
	}

	modificarDatosExperiencia(experiencia: any) {
		return this.http.put(`${this.API_URI}/experiencia/editar/${experiencia.id}?empresa=${experiencia.empresa}&fechaDesde=${experiencia.fechaDesde}&fechaHasta=${experiencia.fechaHasta}&tareas=${experiencia.tareas}&puesto=${experiencia.puesto}`, experiencia);
	}


	/* CRUD EDUCACION */

	listarEducaciones() {
		return this.http.get(`${this.API_URI}/educacion/traer`);
	}

	eliminarEducacion(id: string) {
		return this.http.delete(`${this.API_URI}/educacion/borrar/${id}`, { responseType: 'text' });
	}

	crearEducacion(educacion: any) {
		this.educaciones = educacion;
		return this.http.post(`${this.API_URI}/educacion/crear`, educacion, { responseType: 'text' });
	}

	modificarDatosEducacion(educacion: any) {
		return this.http.put(`${this.API_URI}/educacion/editar/${educacion.id}?universidad=${educacion.universidad}&titulo=${educacion.titulo}&fechaDesde=${educacion.fechaDesde}&fechaHasta=${educacion.fechaHasta}`, educacion);
	}

	buscarEducacion(id: string) {
		return this.http.get(`${this.API_URI}/educacion/traerUno/${id}`);
	}


	/* CRUD SOFT SKILLS */

	listarSoftSkills() {
		return this.http.get(`${this.API_URI}/softSkills/traer`);
	}

	eliminarSoftSkill(id: string) {
		return this.http.delete(`${this.API_URI}/softSkills/borrar/${id}`, { responseType: 'text' });
	}

	crearSoftSkill(softSkill: any) {
		this.softSkills = softSkill;
		return this.http.post(`${this.API_URI}/softSkills/crear`, softSkill, { responseType: 'text' });
	}

	modificarDatosSoftSkill(softSkill: any) {
		return this.http.put(`${this.API_URI}/softSkills/editar/${softSkill.id}?habilidad=${softSkill.habilidad}&porcentaje=${softSkill.porcentaje}`, softSkill);
	}

	buscarSoftSkill(id: string) {
		return this.http.get(`${this.API_URI}/softSkills/traerUno/${id}`);
	}

	/* CRUD HARD SKILLS */

	listarHardSkills() {
		return this.http.get(`${this.API_URI}/hardSkills/traer`);
	}

	eliminarHardSkill(id: string) {
		return this.http.delete(`${this.API_URI}/hardSkills/borrar/${id}`, { responseType: 'text' });
	}

	crearHardSkill(hardSkill: any) {
		this.hardSkills = hardSkill;
		return this.http.post(`${this.API_URI}/hardSkills/crear`, hardSkill, { responseType: 'text' });
	}

	modificarDatosHardSkill(hardSkill: any) {
		return this.http.put(`${this.API_URI}/hardSkills/editar/${hardSkill.id}?habilidad=${hardSkill.habilidad}&porcentaje=${hardSkill.porcentaje}`, hardSkill);
	}


	buscarHardSkill(id: string) {
		return this.http.get(`${this.API_URI}/hardSkills/traerUno/${id}`);
	}

	/* CRUD PROYECTOS */
	listarProyectos() {
		return this.http.get(`${this.API_URI}/proyectos/traer`);
	}

	eliminarProyecto(id: string) {
		return this.http.delete(`${this.API_URI}/proyectos/borrar/${id}`, { responseType: 'text' });
	}

	crearProyecto(proyecto: any) {
		this.proyectos = proyecto;
		return this.http.post(`${this.API_URI}/proyectos/crear`, proyecto, { responseType: 'text' });
	}

	modificarDatosProyecto(proyecto: any) {
		return this.http.put(`${this.API_URI}/proyectos/editar/${proyecto.id}?nombre=${proyecto.nombre}&descripcion=${proyecto.descripcion}&fechaRealizacion=${proyecto.fechaRealizacion}&enlacePagina=${proyecto.enlacePagina}`, proyecto);
	}


	buscarProyecto(id: string) {
		return this.http.get(`${this.API_URI}/proyectos/traerUno/${id}`);
	}

	buscarUsuarioEmail(email: string) {
		return this.http.get(`${this.API_URI}/personas/traerEmail/${email}`);
	}

	buscarUsuarioContrasena(password: string) {
		return this.http.get(`${this.API_URI}/personas/traerPassword/${password}`);
	}

}
