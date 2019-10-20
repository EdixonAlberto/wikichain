import { Options } from 'sequelize';

const env = process.env;
let options: Options;
const ENGINE = 'postgres';

// format uri: "engine://user:password@host:port/db_name"
const uri = `${ENGINE}://${env.DB_USERNAME}:${env.DB_PASSWORD}@${env.DB_HOST}:${env.DB_PORT}/${env.DB_NAME}`;

options = {
  dialect: ENGINE,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
}

export { uri, options };
