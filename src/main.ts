import * as express from 'express';
import { environnement } from './configs/config';
import DatabaseConnection from './configs/DatabaseConnection';

DatabaseConnection.getInstance();

const app = express();



app.listen(environnement.API_PORT, () => {
    console.log(`The API listens on http://${environnement.API_HOST}:${environnement.API_PORT}`);
    console.log(`The admin interface listens on http://${environnement.API_HOST}:${environnement.ADMIN_PORT}`);

})

