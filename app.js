import { ApolloServer } from "apollo-server-express";
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import express from "express";
import http from "http";

async function startApolloServer(typeDefs, resolvers) {
	const app = express();
	const httpServer = http.createServer(app);
	const port = process.env.PORT || 4000;
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
		introspection: true,
		playground: true,
	});
	await server.start();
	server.applyMiddleware({ app });
	await new Promise((resolve) => httpServer.listen({ port }, resolve));
	console.log(
		`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`
	);
}

export default startApolloServer;
