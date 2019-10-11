import { Sequelize } from 'sequelize';
import { config, options } from '../config/database.config';

const sequelizeConnect = (): void => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    { ...options }
  );

  sequelize.authenticate()
    .then(() => console.log(`>> Sequelize OK - connection enable: ${options.dialect}`))
    .catch((err: Error) => {
      console.error(`>> Sequelize ERROR - Unable to connect to the database: ${err}`);
    });
}

export default sequelizeConnect;
