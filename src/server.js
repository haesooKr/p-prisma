import "@babel/polyfill"
import "./env";
import { GraphQLServer } from 'graphql-yoga';
import logger from 'morgan';
import schema from './schema';

const PORT = process.env.PORT || 80;

const server = new GraphQLServer({
  schema
})
server.express.use(logger("dev"));
server.start({ port: PORT }, () => console.log(`Server running on https://localhost:${PORT}`));