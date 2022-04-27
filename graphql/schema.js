import { gql } from "apollo-server-express";

const schema = gql`
	type Alumno {
		idAlumno: ID!
		numBoleta: String!
		password: String!
		nombre: String!
		correo: String!
		tutorias: [TutorTutorado!]
	}

	type AlumnoEnGrupo {
		idAlumnoEnGrupo: ID!
		alumno: Alumno!
		grupo: Grupo!
	}

	type Tutor {
		idTutor: ID!
		nombre: String!
		password: String!
		correo: String!
		tipo: TipoTutor!
		tutorados: [TutorTutorado!]
		encuestas: [Encuesta!]
	}

	type TipoTutor {
		idTipoTutor: ID!
		tipo: String!
		numero: String!
	}

	type TutorTutorado {
		idTutorTutorado: ID!
		tipo: TipoTutoria!
		alumnoTutorado: Alumno!
		tutor: Tutor!
		sesiones: [Sesion!]
	}

	type TipoTutoria {
		idTipoTutoria: ID!
		tipo: String!
		tutorias: [TutorTutorado!]
	}

	type Grupo {
		idGrupo: ID!
		grupo: String!
		alumnos: [Alumno!]
	}

	type Sesion {
		idSesion: ID!
		fechaDeSesion: String!
		asistencia: Boolean!
		tema: Tema!
		tutoria: TutorTutorado!
		actividades: [Actividad!]
	}

	type Tema {
		idTema: ID!
		tema: String!
		sesiones: [Sesion!]
	}

	type Actividad {
		idActividad: ID!
		nombre: String!
		descripcion: String!
		sesion: Sesion!
	}

	type Encuesta {
		idEncuesta: ID!
		fechaCreacion: String!
		fechaLimite: String
		autor: Tutor!
		preguntas: [Pregunta!]
	}

	type Pregunta {
		idPregunta: ID!
		pregunta: String!
		obligatorio: Boolean!
		tipo: TipoPregunta!
		respuestas: [Respuesta]!
		opciones: [Opcion!]
	}

	type Respuesta {
		idRespuesta: ID!
		respuesta: String!
		pregunta: Pregunta!
	}

	type Opcion {
		idOpcion: ID!
		opcion: String!
		pregunta: Pregunta!
	}

	type TipoPregunta {
		idTipoPregunta: ID!
		tipo: String!
		preguntas: [Pregunta!]
	}

	type Query {
		loginAlumno(numBoleta: String!, password: String!): Alumno
		loginTutor(numero: String!, password: String!): Tutor
		getEncuestaById(idEncuesta: ID!): Encuesta
		getEncuestasByTutor(numero: String!): [Encuesta!]
		getSesionById(idSesion: ID!): Sesion
	}

	type Mutation {
		assignAlumno(
			idTutor: ID!
			idAlumno: ID!
			idGrupo: ID!
			idTipoTutoria: ID!
		): TutorTutorado
		unassignAlumno(
			idTutor: ID!
			idAlumno: ID!
			idTipoTutoria: ID!
		): TutorTutorado
		setGroupAlumno(idAlumno: ID!, idGrupo: ID!): Boolean
		registerTutor(
			id: ID
			numEmpleado: String!
			tipo: String!
			nombre: String!
			correo: String!
			password: String!
		): Tutor
		registerAlumno(
			id: ID
			numBoleta: String!
			nombre: String!
			correo: String!
			password: String!
		): Alumno
		createGrupo(grupo: String!): Grupo
		createTema(tema: String!): Tema
		createSesion(
			idTutorTutorado: ID!
			idTema: ID!
			fechaDeSesion: String!
		): Sesion
		createTipoTutoria(tipo: String!): TipoTutoria
		createTipoTutor(tipo: String!): TipoTutor
		createEncuesta(
			idTutor: ID!
			fechaCreacion: String!
			fechaLimite: String
		): Encuesta
		createPregunta(
			idTipoPregunta: ID!
			pregunta: String!
			obligatorio: Boolean!
		): Pregunta
		createRespuesta(idPregunta: ID!, respuesta: String!): Respuesta
		createOpcion(idPregunta: ID!, opcion: String!): Opcion
		createTipoPregunta(tipo: String!): TipoPregunta
		createActividad(
			idSesion: ID!
			nombre: String!
			descripcion: String!
		): Actividad
		updatePasswordTutor(idTutor: ID!, newPassword: String!): Tutor
		updatePasswordAlumno(idAlumno: ID!, newPassword: String!): Alumno
		updateFechaSesion(idSesion: ID!, newFechaSesion: String!): Sesion
		updateAsistencia(idSesion: ID!): Sesion
		updateActividad(
			idActividad: ID!
			nombre: String
			descripcion: String
		): Actividad
		updateTutor(
			idTutor: ID!
			nombre: String
			password: String
			correo: String
		): Tutor
		updateAlumno(
			idAlumno: ID!
			nombre: String
			correo: String
			password: String
		): Alumno
		updateFechaLimiteEncuesta(
			idEncuesta: ID!
			newFechaLimite: String!
		): Encuesta
		deleteAlumnoEnGrupo(idAlumno: ID!): [AlumnoEnGrupo]
	}
`;

export default schema;
