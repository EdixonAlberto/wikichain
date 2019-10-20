import { config } from 'dotenv';
import { resolve } from 'path';

const NODE_ENV = process.env.NODE_ENV as string;

if (NODE_ENV) {
  const path = resolve(`.env.${NODE_ENV}`);
  const env = config({ path });

  if (env.parsed) {
    console.log(`>> Dotenv OK - env mode: ${NODE_ENV}`);
  } else console.log(`>> Dotenv ERROR - ${env.error}`);
}
