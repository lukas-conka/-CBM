import { app, startServer } from './app'

startServer();
app.listen(process.env.PORT || 3000, () => {console.log(`Server online....`)})