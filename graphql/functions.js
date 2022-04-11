import { Query } from "./resolvers/query";
import { Mutation } from "./resolvers/mutation";
import Actividad from "./resolvers/actividadResolver";
import Alumno from "./resolvers/alumnoResolver";
import AlumnoEnGrupo from "./resolvers/alumnoEnGrupoResolver";
import Encuesta from "./resolvers/encuestaResolver";
import Grupo from "./resolvers/grupoResolver";
import Opcion from "./resolvers/opcionResolver";
import Pregunta from "./resolvers/preguntaResolver";
import Respuesta from "./resolvers/respuestaResolver";
import Sesion from "./resolvers/sesionResolver";
import Tema from "./resolvers/temaResolver";
import TipoPregunta from "./resolvers/tipoPreguntaResolver";
import TipoTutoria from "./resolvers/tipoTutoriaResolver";
import TipoTutor from "./resolvers/tipoTutorResolver";
import Tutor from "./resolvers/tutorResolver";
import TutorTutorado from "./resolvers/tutorTutoradoResolver";

const resolvers = {
	Query,
	Mutation,
	Actividad,
	Alumno,
	AlumnoEnGrupo,
	Encuesta,
	Grupo,
	Opcion,
	Pregunta,
	Respuesta,
	Sesion,
	Tema,
	TipoPregunta,
	TipoTutoria,
	TipoTutor,
	Tutor,
	TutorTutorado,
};

export default resolvers;
