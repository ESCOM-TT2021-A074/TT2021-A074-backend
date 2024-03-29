import { gql } from "graphql-request";
import "regenerator-runtime/runtime";
import graphQLClient from "./config";

describe("", () => {
	it("Cambiar password del Alumno", async () => {
		const dataAlumno = {
			idAlumno: 36,
			newPassword: "NewSrtingChain",
		};

		const mutation = gql`
			mutation cambiarPassword($idAlumno: ID!, $newPassword: String!) {
				updatePasswordAlumno(idAlumno: $idAlumno, newPassword: $newPassword) {
					password
				}
			}
		`;

		const data = await graphQLClient
			.request(mutation, dataAlumno)
			.catch((err) => console.error(err));

		const alumno = data.updatePasswordAlumno;

		expect(alumno.password).toBe(dataAlumno.newPassword);
	});
});
