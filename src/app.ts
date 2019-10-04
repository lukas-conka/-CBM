import * as mongoose from 'mongoose';
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql'
import schema from './graphql/schema'

//@ts-ignore
const startServer = async () => {
  const app = express();

  app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: process.env.NODE_ENV === 'development'
  }));

  await mongoose.connect("mongodb://localhost:27017/cbm",{
    useNewUrlParser: true
  });

  const server = app.listen({port: 3000}, () => { 
    //@ts-ignore
    let port = server.address().port;
    console.log(`Server started at port ${port}`
    )})
}

startServer();