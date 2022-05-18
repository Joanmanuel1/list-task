export interface Usuario{
	id?: number;
	nombre?: string;
	apellido?: string;
	edad?: number;
	titulo?: string;
	descripcion?: string;
}

export interface Experiencia{
	id?: number;
	empresa?: string;
	puesto?: string;
	fechaDesde?: number;
	fechaHasta?: string;
	tareas?: string;
}