import { Module } from '@nestjs/common';
import { PointModule } from './point/point.module';
import { DestinationModule } from './destination/destination.module';
import { OfferModule } from './offer/offer.module';

@Module({
  imports: [PointModule, DestinationModule, OfferModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
