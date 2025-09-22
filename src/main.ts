import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { GLOBAL_PREFIX } from './libs/const';
import { HttpExceptionFilter } from 'src/libs/http-exception';
import { AuthorizationGuard } from './libs/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:8080',
    methods: 'GET,POST,PUT,DELETE',
  });
  app.setGlobalPrefix(GLOBAL_PREFIX);
  app.useGlobalGuards(new AuthorizationGuard());
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());
  const configService = app.get(ConfigService);

  const host = configService.get<string>('application.host');
  const port = configService.get<number>('application.port') as number;

  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://${host}:${port}/${GLOBAL_PREFIX}`,
  );
}
bootstrap();
