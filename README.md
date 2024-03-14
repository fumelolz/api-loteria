Usar npm i para instalar

Cambiar la configuración en el archivo ormconfig.ts

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

En username y password para conexión a sql server

ejecutar el proyecto usando

npm run start
