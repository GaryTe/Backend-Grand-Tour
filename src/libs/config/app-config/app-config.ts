import { registerAs } from '@nestjs/config';
import { validateSync, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ApplicationConfig } from 'src/libs/type';
import { DEFAULT_APPLICATION_PORT } from 'src/libs/const';
import { ApplicationConfiguration } from './application-configuration';
import { CONSTRAINT_KEYS } from 'src/libs/const';

export default registerAs('application', (): ApplicationConfig => {
  let constraints: Array<string> = [];

  const applicationConfig: ApplicationConfig = {
    host: process.env.HOST,
    port: parseInt(process.env.PORT as string, 10) || DEFAULT_APPLICATION_PORT,
  };

  const appConfig = plainToInstance(
    ApplicationConfiguration,
    applicationConfig,
    { enableImplicitConversion: true },
  );

  const errors: ValidationError[] | [] = validateSync(appConfig, {
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

    const err: string = Object.values(constraints).join(',');
    throw new Error(err);
  }

  return applicationConfig;
});
