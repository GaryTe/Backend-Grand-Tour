import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PointModule } from './point/point.module';
import { DestinationModule } from './destination/destination.module';
import { OfferModule } from './offer/offer.module';
import { ENV_FILE_PATH } from './libs/const';
import { appConfig } from './libs/config/app-config';

@Module({
  imports: [
    PointModule,
    DestinationModule,
    OfferModule,
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [appConfig],
      envFilePath: ENV_FILE_PATH
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
