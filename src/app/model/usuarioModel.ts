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

export interface Educacion{
	id?: number;
	universidad?: string;
	titulo?: string;
	fechaDesde?: number;
	fechaHasta?: string;

}


export interface HardSkill{
	id?: number;
	porcentaje?: number;
	habilidad?: string;

}

export interface SoftSkill{
	id?: number;
	porcentaje?: number;
	habilidad?: string;

}

export interface Proyecto{
	id?: number;
	nombre?: string;
	descripcion?: string;
	fechaRealizacion?: string;
	enlacePagina?: string;

}
