import { gql } from "graphql-request";
import "regenerator-runtime/runtime";
import graphQLClient from "./config";

describe("Como tutor quiero tener alumnos tutorados para ", () => {
	it("Agregar un nuevo alumno tutorado", async () => {
		const dataTutor = {
			idTutor: 18,
		};

		const dataAlumno = {
			numBoleta: 2017632335,
		};

		const mutation = gql`
			mutation asociarAlumno($idTutor: ID!, $numBoleta: Int!) {
				setAlumno(idTutor: $idTutor, numBoleta: $numBoleta) {
					idAlumno
					nombre
					numBoleta
					tutor {
						idTutor
					}
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, { ...dataTutor, ...dataAlumno })
			.catch((err) => console.error(err));

		const alumno = data.setAlumno;
		expect(parseInt(alumno.idAlumno)).toBeGreaterThan(0);
		expect(alumno.tutor).not.toBeNull();
		expect(alumno.tutor).not.toBeUndefined();
	});

	it("Eliminar un alumno tutorado", async () => {
		const dataAlumno = {
			numBoleta: 2017632335,
		};

		const mutation = gql`
			mutation deslindarAlumnoDeTutor($numBoleta: Int!) {
				deleteAlumno(numBoleta: $numBoleta) {
					idAlumno
					tutor {
						idTutor
					}
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

		const dataTipoSesion = {
			idTipoSesion: 1,
		};

		const mutation = gql`
			mutation crearNuevaSesion(
				$idTutor: ID!
				$idTema: ID!
				$idTipoSesion: ID!
				$fechaDeSesion: String!
			) {
				createSesion(
					idTutor: $idTutor
					idTema: $idTema
					idTipoSesion: $idTipoSesion
					fechaDeSesion: $fechaDeSesion
				) {
					fechaDeSesion
					tutor {
						idTutor
						nombre
					}
					tema {
						idTema
						tema
					}
					tipoSesion {
						idTipoSesion
						tipo
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
				...dataTipoSesion,
				fechaDeSesion,
			})
			.catch((err) => console.error(err));

		const sesion = data.createSesion;

		expect(new Date(parseInt(sesion.fechaDeSesion)).toUTCString()).toBe(
			fechaDeSesion
		);
		expect(parseInt(sesion.tutor.idTutor)).toBe(dataTutor.idTutor);
		expect(sesion.tutor.nombre).toBe("Laura Mendez");
		expect(parseInt(sesion.tema.idTema)).toBe(dataTema.idTema);
		expect(sesion.tema.tema).toBe("Escolar");
		expect(parseInt(sesion.tipoSesion.idTipoSesion)).toBe(
			dataTipoSesion.idTipoSesion
		);
		expect(sesion.tipoSesion.tipo).toBe("Individual");
	});
});

describe("Como tutor quiero tener alumnos tutorados para ", () => {
	it("Agregar un nuevo alumno tutorado", async () => {
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
