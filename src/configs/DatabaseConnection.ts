import { Connection, createConnection } from "typeorm";
import "reflect-metadata";
import { databaseConnection } from "./config";

class DatabaseConnection {

    connection: Connection | undefined;
    static instance: DatabaseConnection | undefined;
    private constructor() {
        createConnection(databaseConnection)
            .then(connection => {
                this.connection = connection;

            }).catch(error => { throw new Error(error) });
    }


    static getInstance(): DatabaseConnection {
        if (DatabaseConnection.instance === undefined) {
            DatabaseConnection.instance = new DatabaseConnection();
        }
        return DatabaseConnection.instance;
    }
}

export default DatabaseConnection;