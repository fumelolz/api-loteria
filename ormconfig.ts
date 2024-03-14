import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'daniel',
  password: '',
  database: 'db_loteria',
  entities: ['dist/src/_common/_entities/*.entity.js'],
  synchronize: false,
  options: { encrypt: false },
};

export default config;
