import { Query } from "./resolvers/query";
import { Mutation } from "./resolvers/mutation";
import Alumno from "./resolvers/alumnoResolver";
import Tutor from "./resolvers/tutorResolver";
import Grupo from "./resolvers/grupoResolver";
import Tema from "./resolvers/temaResolver";
import TipoSesion from "./resolvers/tipoSesionResolver";
import Actividad from "./resolvers/actividadResolver";
import Sesion from "./resolvers/sesionResolver";

const resolvers = {
	Query,
	Mutation,
	Actividad,
	Alumno,
	Grupo,
	Sesion,
	Tema,
	TipoSesion,
	Tutor,
};

export default resolvers;
