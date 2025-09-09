import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository.';
import { OfferEntity } from './offer.entity';
import { RouteEntity } from './route.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OfferEntity, RouteEntity])],
  controllers: [OfferController],
  providers: [OfferService, OfferRepository],
})
export class OfferModule {}
