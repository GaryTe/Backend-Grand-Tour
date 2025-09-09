import { registerAs } from '@nestjs/config';
import { validateSync, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { PostgresConfig } from 'src/libs/type';
import { DEFAULT_POSTGRES_PORT } from 'src/libs/const/config-postgres';
import { PostgresConfiguration } from './postgres-configuration';
import { CONSTRAINT_KEYS } from 'src/libs/const';

export default registerAs('dbPostgres', (): PostgresConfig => {
  let constraints: Array<string> = [];

  const postgresConfig: PostgresConfig = {
    host: process.env.HOST,
    port:
      parseInt(process.env.POSTGRES_PORT as string, 10) ||
      DEFAULT_POSTGRES_PORT,
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    email: process.env.PGADMIN_EMAIL,
  };

  const dbConfig = plainToInstance(PostgresConfiguration, postgresConfig, {
    enableImplicitConversion: true,
  });

  const errors: ValidationError[] | [] = validateSync(dbConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    errors.forEach((item) => {
      let value: string | undefined = undefined;

      for (const key of CONSTRAINT_KEYS) {
        const constraint = item?.constraints;

        if (!constraint) {
          return;
        }

        value = constraint[key];

        if (typeof value === 'string') {
          constraints.push(constraint[key]);
          return;
        }
      }
    });

    const err: string = Object.values(constraints).join(' , ');
    throw new Error(err);
  }

  return postgresConfig;
});
