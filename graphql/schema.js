import { gql } from "apollo-server-express";

const schema = gql`
	type Alumno {
		idAlumno: ID!
		numBoleta: Int!
		password: String!
		nombre: String!
		tutor: Tutor
	}

	type Tutor {
		idTutor: ID!
		numEmpleado: Int!
		password: String!
		nombre: String!
		alumnos: [Alumno!]
		grupos: [Grupo!]
		sesiones: [Sesion!]
	}

	type Grupo {
		idGrupo: ID!
		grupo: String!
		tutor: Tutor
	}

	type Sesion {
		idSesion: ID!
		fechaDeSesion: String!
		tipoSesion: TipoSesion!
		tema: Tema!
		tutor: Tutor!
		actividades: [Actividad!]
	}

	type Tema {
		idTema: ID!
		tema: String!
		sesiones: [Sesion!]
	}

	type TipoSesion {
		idTipoSesion: ID!
		tipo: String!
		sesiones: [Sesion!]
	}

	type Actividad {
		idActividad: ID!
		nombre: String!
		descripcion: String!
		sesion: Sesion!
	}

	type Query {
		loginAlumno(numBoleta: Int!, password: String!): Alumno
		loginTutor(numEmpleado: Int!, password: String!): Tutor
	}

	type Mutation {
		setAlumno(idTutor: ID!, numBoleta: Int!): Alumno
		deleteAlumno(numBoleta: Int!): Alumno
		registerTutor(
			id: ID
			numEmpleado: Int
			password: String
			nombre: String
		): Tutor
		registerAlumno(
			id: ID
			numBoleta: Int
			password: String
			nombre: String
		): Alumno
		createGrupo(grupo: String!): Grupo
		createTema(tema: String!): Tema
		createTipoSesion(tipo: String!): TipoSesion
		createSesion(
			idTutor: ID!
			idTema: ID!
			idTipoSesion: ID!
			fechaDeSesion: String!
		): Sesion
		createActividad(
			idSesion: ID!
			nombre: String!
			descripcion: String!
		): Actividad
		updatePasswordTutor(idTutor: ID!, newPassword: String!): Tutor
		updatePasswordAlumno(idAlumno: ID!, newPassword: String!): Alumno
		updateFechaSesion(idSesion: ID!, newFechaSesion: String!): Sesion
		updateActividad(
			idActividad: ID!
			nombre: String
			descripcion: String
		): Actividad
	}
`;

export default schema;
