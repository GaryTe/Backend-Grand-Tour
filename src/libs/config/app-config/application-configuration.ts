import { IsNumber, IsString, Max, Min } from 'class-validator';

import { MAX_PORT, MIN_PORT } from 'src/libs/const';
import { EnvValidationMessageForApplication } from 'src/libs/error-validation';

export class ApplicationConfiguration {
  @IsString({
    message: EnvValidationMessageForApplication.AppHost,
  })
  public host: string;

  @IsNumber(
    {},
    {
      message: EnvValidationMessageForApplication.AppPort,
    },
  )
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;
}
