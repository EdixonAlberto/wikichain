import { Config } from "sequelize/types";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production' | undefined,
      DB_NAME: Config['database'],
      DB_USERNAME: Config['username'],
      DB_PASSWORD: Config['password'],
      DB_HOST: Config['host'],
      DB_PORT: Config['port']
    }
  }
}

export default global;
