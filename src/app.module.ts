import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PointModule } from './point/point.module';
import { DestinationModule } from './destination/destination.module';
import { OfferModule } from './offer/offer.module';
import { ENV_FILE_PATH } from './libs/const';
import { appConfig } from './libs/config/app-config';
import { postgresConfig } from './libs/config/postgres-config';

@Module({
  imports: [
    PointModule,
    DestinationModule,
    OfferModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig, postgresConfig],
      envFilePath: ENV_FILE_PATH,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('dbPostgres.host'),
        port: config.get<number>('dbPostgres.port'),
        username: config.get<string>('dbPostgres.username'),
        password: config.get<string>('dbPostgres.password'),
        database: config.get<string>('dbPostgres.database'),
        entities: [],
        synchronize: true,
        autoLoadEntities: true,
        retryAttempts: 3,
        retryDelay: 5000,
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
