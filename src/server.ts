import { app, startServer } from './app'

startServer();
app.listen(3000, () => {console.log(`Server online....`)})