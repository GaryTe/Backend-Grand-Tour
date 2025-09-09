import { IsNumber, IsString, Max, Min, IsEmail } from 'class-validator';

import { MAX_PORT, MIN_PORT } from 'src/libs/const';
import { EnvValidationMessageForPostgres } from 'src/libs/error-validation';

export class PostgresConfiguration {
  @IsString({
    message: EnvValidationMessageForPostgres.PostgresHost,
  })
  public host: string;

  @IsNumber(
    {},
    {
      message: EnvValidationMessageForPostgres.PostgresPort,
    },
  )
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;

  @IsString({
    message: EnvValidationMessageForPostgres.PostgresUsername,
  })
  public username: string;

  @IsString({
    message: EnvValidationMessageForPostgres.PostgresPassword,
  })
  public password: string;

  @IsString({
    message: EnvValidationMessageForPostgres.PostgresDatabase,
  })
  public database: string;

  @IsEmail(
    {},
    {
      message: EnvValidationMessageForPostgres.PostgresEmail,
    },
  )
  public email: string;
}
