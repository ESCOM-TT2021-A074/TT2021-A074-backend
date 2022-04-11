import { gql } from "graphql-request";
import "regenerator-runtime/runtime";
import graphQLClient from "./config";

describe("Como tutor quiero tener alumnos tutorados para ", () => {
	it("Agregar un nuevo alumno tutorado", async () => {
		const dataTutor = {
			idTutor: 1,
			idTipoTutoria: 1,
		};

		const dataAlumno = {
			idAlumno: 1,
			idGrupo: 1,
		};

		const mutation = gql`
			mutation asociarAlumno(
				$idTutor: ID!
				$idAlumno: ID!
				$idGrupo: ID!
				$idTipoTutoria: ID!
			) {
				assignAlumno(
					idTutor: $idTutor
					idAlumno: $idAlumno
					idGrupo: $idGrupo
					idTipoTutoria: $idTipoTutoria
				) {
					idAlumno
					nombre
					numBoleta
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, { ...dataTutor, ...dataAlumno })
			.catch((err) => console.error(err));

		const alumno = data.setAlumno;
		expect(parseInt(alumno.idAlumno)).toBeGreaterThan(0);
	});

	it("Eliminar un alumno tutorado", async () => {
		const dataAlumno = {
			idAlumno: 1,
		};

		const dataTutor = {
			idTutor: 1,
			idTipoTutoria: 1,
		};

		const mutation = gql`
			mutation deslindarAlumnoDeTutor(
				$idAlumno: ID!
				$idTutor: ID!
				$idTipoTutoria: ID!
			) {
				unassignAlumno(
					idAlumno: $idAlumno
					idTutor: $idTutor
					idTipoTutoria: $idTipoTutoria
				) {
					idAlumno
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataAlumno)
			.catch((err) => console.error(err));

		const alumno = data.deleteAlumno;
		expect(parseInt(alumno.idAlumno)).toBe(36);
		expect(alumno.tutor).toBeNull();
	});
});

describe("Como tutor quiero poder agendar sesiones ", () => {
	it("Crear una sesion", async () => {
		const dataTutor = {
			idTutor: 18,
		};

		const dataTema = {
			idTema: 1,
		};

		const mutation = gql`
			mutation crearNuevaSesion(
				$idTema: ID!
				$idTutorTutorado: ID!
				$fechaDeSesion: String!
			) {
				createSesion(
					idTutorTutorado: $idTutorTutorado
					idTema: $idTema
					fechaDeSesion: $fechaDeSesion
				) {
					fechaDeSesion
					tema {
						idTema
						tema
					}
				}
			}
		`;

		const now = new Date();
		const fechaDeSesion = new Date(
			Date.UTC(
				now.getFullYear(),
				now.getMonth(),
				now.getDate() + 10,
				now.getHours()
			)
		).toUTCString();

		const data = await graphQLClient
			.request(mutation, {
				...dataTutor,
				...dataTema,
				fechaDeSesion,
			})
			.catch((err) => console.error(err));

		const sesion = data.createSesion;

		expect(new Date(parseInt(sesion.fechaDeSesion)).toUTCString()).toBe(
			fechaDeSesion
		);
		expect(parseInt(sesion.tema.idTema)).toBe(dataTema.idTema);
		expect(sesion.tema.tema).toBe("Escolar");
	});
});

describe("Como tutor quiero tener alumnos tutorados para ", () => {
	it("Crear una actividad", async () => {
		const dataSesion = {
			idSesion: 13,
		};

		const dataActividad = {
			nombre: "Asunto escolar",
			descripcion: "Se retoma temas generales acerca del ambito escolar",
		};

		const mutation = gql`
			mutation crearActividad(
				$idSesion: ID!
				$nombre: String!
				$descripcion: String!
			) {
				createActividad(
					idSesion: $idSesion
					nombre: $nombre
					descripcion: $descripcion
				) {
					nombre
					descripcion
					sesion {
						tutor {
							nombre
						}
						tema {
							tema
						}
						tipoSesion {
							tipo
						}
					}
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, { ...dataSesion, ...dataActividad })
			.catch((err) => console.error(err));

		const actividad = data.createActividad;
		expect(actividad.nombre).toBe(dataActividad.nombre);
		expect(actividad.descripcion).toBe(dataActividad.descripcion);
		expect(actividad.sesion).not.toBeUndefined();
		expect(actividad.sesion.tutor).not.toBeUndefined();
		expect(actividad.sesion.tutor.nombre).toBe("Laura Mendez");
		expect(actividad.sesion.tema).not.toBeUndefined();
		expect(actividad.sesion.tema.tema).toBe("Escolar");
		expect(actividad.sesion.tipoSesion).not.toBeUndefined();
		expect(actividad.sesion.tipoSesion.tipo).toBe("Individual");
	});
});

describe("", () => {
	it("Cambiar el password", async () => {
		const dataTutor = {
			idTutor: 18,
			newPassword: "NewStringChain",
		};

		const mutation = gql`
			mutation cambiarPassword($idTutor: ID!, $newPassword: String!) {
				updatePasswordTutor(idTutor: $idTutor, newPassword: $newPassword) {
					password
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataTutor)
			.catch((err) => console.error(err));

		const tutor = data.updatePasswordTutor;

		expect(tutor.password).toBe(dataTutor.newPassword);
	});
});

describe("", () => {
	it("Cambiar fecha de sesion", async () => {
		let fechaHoy = new Date(Date.now());
		fechaHoy = fechaHoy.toUTCString();

		const dataSesion = {
			idSesion: 13,
			newFechaSesion: fechaHoy,
		};

		const mutation = gql`
			mutation cambiarFechaSesion($idSesion: ID!, $newFechaSesion: String!) {
				updateFechaSesion(
					idSesion: $idSesion
					newFechaSesion: $newFechaSesion
				) {
					fechaDeSesion
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataSesion)
			.catch((err) => console.error(err));

		const sesion = data.updateFechaSesion;

		expect(new Date(parseInt(sesion.fechaDeSesion)).toUTCString()).toBe(
			dataSesion.newFechaSesion
		);
	});

	it("Cambiar datos de las actividades", async () => {
		const dataActividad = {
			idActividad: 1,
			nombre: "Nueva actividad",
			descripcion: "Toma de protesta para el alumno",
		};

		const mutacion = gql`
			mutation cambiarDatosActividad(
				$idActividad: ID!
				$nombre: String
				$descripcion: String
			) {
				updateActividad(
					idActividad: $idActividad
					nombre: $nombre
					descripcion: $descripcion
				) {
					nombre
					descripcion
				}
			}
		`;

		const data = await graphQLClient
			.request(mutacion, dataActividad)
			.catch((err) => console.error(err));

		const actividad = data.updateActividad;

		expect(actividad.nombre).toBe(dataActividad.nombre);
		expect(actividad.descripcion).toBe(dataActividad.descripcion);
	});
});
