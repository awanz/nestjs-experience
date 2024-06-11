import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'SA',
  password: 'AwanSky123!',
  database: 'nest',
  extra: {
    trustServerCertificate: true,
  },
  entities: [__dirname + '/modules/database/entities/*.entity.{js,ts}'],
  migrations: ['dist/migrations/*.{js,ts}'],
  logging: true,
  synchronize: false,
  migrationsTableName: 'typeorm_migrations',
  migrationsRun: false,
};

export const dataSource = new DataSource(dataSourceOptions);
