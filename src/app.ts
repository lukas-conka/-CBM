import * as express from 'express';

class App {

  public express: express.Application

  constructor(){
    this.express = express();
    this.middleware();
  }

  private middleware(): void {
    this.express.use('/', (req, res, next) =>{
      res.send("Ola mundo")
    })
  }
}

export default new App().express; 