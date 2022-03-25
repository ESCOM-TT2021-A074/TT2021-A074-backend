import startApolloServer from "./app";
import resolvers from "./graphql/functions";
import schema from "./graphql/schema";

startApolloServer(schema, resolvers).catch((e) => {
	console.error(e);
});
