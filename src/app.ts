import * as mongoose from "mongoose";
import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";

const app = express();

const connectMongo = async () => {
  await mongoose.connect("mongodb://localhost:27017/cbm", {
    useNewUrlParser: true
  });
};

const startServer = () => {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: process.env.NODE_ENV === "development"
    })
  );
  connectMongo();
};

export { startServer, app };
