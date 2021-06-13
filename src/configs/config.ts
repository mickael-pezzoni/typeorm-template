import * as dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-snake-naming-strategy';

const env = dotenv.config({
    path: process.env.NODE_ENV === 'production'
        ? '.env'
        : `.env.${process.env.NODE_ENV}`
});


export const environnement = {
    API_PORT: process.env.API_PORT as string,
    API_NAME: process.env.API_NAME as string,
    API_HOST: process.env.API_HOST as string,
    ADMIN_PORT: parseInt(process.env.ADMIN_PORT as string, 10),
    NODE_ENV: process.env.NODE_ENV as string,
    isProduction: process.env.NODE_ENV === 'production'

}

export const databaseConnection: ConnectionOptions = {
    type: 'mariadb',
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    port: parseInt(process.env.DB_PORT as string, 10),
    charset: 'utf8_general_ci',
    database: process.env.DB_DATABASE as string,
    entities: [`${__dirname}/../**/*.entity{.ts,.js}`],
    synchronize: !environnement.isProduction,
    logging: !environnement.isProduction,
    namingStrategy: new SnakeNamingStrategy(),
}