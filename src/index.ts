import app from "./app";
import { startConnection } from './database';

//This will start our connection with the database and our application
async function main(): Promise<void>{
    startConnection();
    await app.listen(app.get('port'));
    console.log("Listening on port: ", app.get('port'));
}

main();
