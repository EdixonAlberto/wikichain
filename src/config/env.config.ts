import { DotenvConfigOutput, config } from 'dotenv';
import { resolve } from 'path';

const NODE_ENV: string = process.env.NODE_ENV as string;

if (NODE_ENV) {
	const path: string = resolve(`.env.${NODE_ENV}`);
	const env: DotenvConfigOutput = config({ path });

	if (env.parsed) {
		console.log(`>> Dotenv OK - env mode: ${NODE_ENV}`);
	} else console.log(`>> Dotenv ERROR - ${env.error}`);
}
