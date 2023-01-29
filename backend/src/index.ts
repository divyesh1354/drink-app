import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import drinks from './graphql/drinks';
import resolvers from './graphql/resolvers';
import { ApolloServerPluginDrainHttpServer } from "apollo-server-core";
import http from "http";

async function main() {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer({ 
    typeDefs: drinks, 
    resolvers,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  }) as any;

  await server.start();
  server.applyMiddleware({ app });
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve) //run the server on port 4001
  );
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
}
main();
