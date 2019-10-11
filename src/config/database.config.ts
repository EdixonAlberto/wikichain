import { Options } from 'sequelize';
import { typeConfigSequelize } from '@types';

const env: NodeJS.ProcessEnv = process.env;
let config: typeConfigSequelize;
let options: Options;

config = {
  database: env.DB_NAME as string,
  username: env.DB_USERNAME as string,
  password: env.DB_PASSWORD as string,
  host: env.DB_HOST as string,
  port: env.DB_PORT as unknown as number
}

options = {
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false
}

export { config, options };
