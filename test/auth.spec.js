import { gql } from "graphql-request";
import "regenerator-runtime/runtime";
import graphQLClient from "./config";

describe("Como alumno quiero registrarme e ingresar a la plataforma", () => {
	it("Registrar un alumno nuevo", async () => {
		const dataAlumno = {
			numBoleta: 2017632335,
			password: "StringChain",
			nombre: "Soren Hernandez",
			correo: "fdriverap@gmail.com",
		};

		const mutation = gql`
			mutation registrarAlumno(
				$numBoleta: Int!
				$password: String!
				$nombre: String!
				$correo: String
			) {
				registerAlumno(
					numBoleta: $numBoleta
					password: $password
					nombre: $nombre
					correo: $correo
				) {
					idAlumno
					numBoleta
					nombre
					correo
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataAlumno)
			.catch((err) => console.error(err));

		const alumno = data.registerAlumno;
		expect(parseInt(alumno.idAlumno)).toBeGreaterThan(0);
		expect(alumno.nombre).not.toBeUndefined();
		expect(alumno.numBoleta.length).toBe(10);
		expect(alumno.correo).not.toBeUndefined();
	});

	it("Loggearse como alumno", async () => {
		const dataAlumno = {
			numBoleta: 2017632335,
			password: "StringChain",
		};

		const query = gql`
			query login($numBoleta: Int!, $password: String!) {
				loginAlumno(numBoleta: $numBoleta, password: $password) {
					idAlumno
					numBoleta
					nombre
				}
			}
		`;

		const data = await graphQLClient
			.request(query, dataAlumno)
			.catch((err) => console.error(err));

		const alumno = data.loginAlumno;
		expect(alumno).not.toBeNull();
		expect(alumno.nombre).toBe("Soren Hernandez");
		expect(alumno.numBoleta.toString().length).toBe(10);
	});
});

describe("Como Tutor quiero registrarme e ingresar a la plataforma", () => {
	it("Registrar un tutor nuevo", async () => {
		const dataTutor = {
			numEmpleado: "2017632335",
			password: "StringChain",
			nombre: "Laura Mendez",
			tipo: "Profesor",
			correo: "lmendez@ipn.mx",
		};

		const mutation = gql`
			mutation registrarTutor(
				$numEmpleado: String!
				$tipo: String!
				$nombre: String!
				$correo: String!
				$password: String!
			) {
				registerTutor(
					numEmpleado: $numEmpleado
					password: $password
					nombre: $nombre
					correo: $correo
					tipo: $tipo
				) {
					idTutor
					nombre
					correo
					password
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataTutor)
			.catch((err) => console.error(err));

		const tutor = data.registerTutor;
		expect(parseInt(tutor.idTutor)).toBeGreaterThan(0);
		expect(tutor.nombre).not.toBeUndefined();
	});
	it("Loggearse como tutor", async () => {
		const dataTutor = {
			numEmpleado: "2017632335",
			password: "StringChain",
		};

		const query = gql`
			query login($numEmpleado: Int!, $password: String!) {
				loginTutor(numEmpleado: $numEmpleado, password: $password) {
					idTutor
					nombre
					correo
				}
			}
		`;

		const data = await graphQLClient
			.request(query, dataTutor)
			.catch((err) => console.error(err));

		const tutor = data.loginTutor;
		expect(tutor).not.toBeNull();
		expect(tutor.nombre).toBe("Laura Mendez");
		expect(tutor.correo).toBe("lmendez@ipn.mx");
	});
});
