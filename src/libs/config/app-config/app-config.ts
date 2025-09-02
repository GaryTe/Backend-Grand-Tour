import { registerAs } from '@nestjs/config';
import { validateSync, ValidationError } from 'class-validator';
import { plainToInstance } from 'class-transformer';

import { ApplicationConfig } from 'src/libs/type';
import { DEFAULT_APPLICATION_PORT } from 'src/libs/const';
import { ApplicationConfiguration } from './application-configuration';

export default registerAs('application', (): ApplicationConfig => {
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
    const constraints = errors.map(
      (item: ValidationError) => item?.constraints?.isString
    );

    if (constraints === undefined) {
      throw new Error(`
            At the path: backend-grand-tour/src/libs/config/app-config/app-config.ts.
            There was a mistake on line 31.
            The variables of the environment did not go through validation.
            `);
    }

    const err: string = Object.values(constraints).join(',');
    throw new Error(err);
  }

  return applicationConfig;
});
