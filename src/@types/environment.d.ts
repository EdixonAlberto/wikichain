declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string,
      DB_NAME: string,
      DB_USERNAME: string,
      DB_PASSWORD: string,
      DB_HOST: string,
      DB_PORT: number
    }
  }
}

export default global;
