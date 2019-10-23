import * as mongoose from "mongoose";
import * as express from "express";
import * as graphqlHTTP from "express-graphql";
import schema from "./graphql/schema";
import { config } from "dotenv";
import { join } from "path";

const env = process.env.NODE_ENV || "prod";

const configPath = join(__dirname, './config', `.env.${env}`)

config({
  path: configPath
})

const app = express();


console.log("ENV>", process.env.MONGODB_URL)

const connectMongo = async () => {
  await mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true
  });
};

const startServer = () => {
  app.use(
    "/graphql",
    graphqlHTTP({
      schema: schema,
      graphiql: process.env.NODE_ENV === "dev"
    })
  );
  connectMongo();
};

export { startServer, app };
