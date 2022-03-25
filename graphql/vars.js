import db from "../models/index";

const Alumno = db["Alumno"];
const Tutor = db["Tutor"];
const Grupo = db["Grupo"];
const Sesion = db["Sesion"];
const Tema = db["Tema"];
const TipoSesion = db["TipoSesion"];
const Actividad = db["Actividad"];

export { Alumno, Tutor, Grupo, Sesion, Tema, TipoSesion, Actividad };
