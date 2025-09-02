import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from './libs/const';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(GLOBAL_PREFIX);
  const configService = app.get(ConfigService);

  const host = configService.get<string>('application.host');
  const port = configService.get<number>('application.port') as number;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${GLOBAL_PREFIX}`,
  );
}
bootstrap();
