import { Sequelize } from 'sequelize';
import { uri, options } from '../config/database.config';

const sequelize = new Sequelize(uri, { ...options });

sequelize.authenticate()
  .then(() => console.log(`>> Sequelize OK - connection enable: ${options.dialect}`))
  .catch((err: Error) => {
    console.error(`>> Sequelize ERROR - Unable to connect to the database: ${err}`);
  });

export { sequelize };
