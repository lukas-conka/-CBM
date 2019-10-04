import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

const startServer = () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));

  app.listen({port: 3000}, () => { console.log("Server started ...")})
}

startServer();