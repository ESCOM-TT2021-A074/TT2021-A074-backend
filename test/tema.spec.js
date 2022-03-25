import { gql } from "graphql-request";
import graphQLClient from "./config";
import "regenerator-runtime/runtime";

test("Crear un nuevo tema", async () => {
	const dataTema = {
		tema: "Escolar",
	};

	const mutation = gql`
		mutation crearNuevoTema($tema: String!) {
			createTema(tema: $tema) {
				idTema
				tema
			}
		}
	`;

	const data = await graphQLClient.request(mutation, dataTema).catch((err) => {
		console.error(err);
	});
	const tema = data.createTema;
	expect(tema.tema).toBe(dataTema.tema);
});
