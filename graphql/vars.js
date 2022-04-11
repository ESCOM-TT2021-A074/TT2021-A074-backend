import db from "../models/index";

const Actividad = db["Actividad"];
const Alumno = db["Alumno"];
const AlumnoEnGrupo = db["AlumnoEnGrupo"];
const Encuesta = db["Encuesta"];
const Grupo = db["Grupo"];
const Opcion = db["Opcion"];
const Pregunta = db["Pregunta"];
const Respuesta = db["Respuesta"];
const Sesion = db["Sesion"];
const Tema = db["Tema"];
const TipoPregunta = db["TipoPregunta"];
const TipoTutoria = db["TipoTutoria"];
const TipoTutor = db["TipoTutor"];
const Tutor = db["Tutor"];
const TutorTutorado = db["TutorTutorado"];

export {
	Actividad,
	Alumno,
	AlumnoEnGrupo,
	Grupo,
	Encuesta,
	Opcion,
	Pregunta,
	Respuesta,
	Sesion,
	TipoPregunta,
	TipoTutoria,
	TipoTutor,
	Tema,
	Tutor,
	TutorTutorado,
};
