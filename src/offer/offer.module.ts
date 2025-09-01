import { Module } from '@nestjs/common';
import { OfferController } from './offer.controller';
import { OfferService } from './offer.service';
import { OfferRepository } from './offer.repository.';

@Module({
  controllers: [OfferController],
  providers: [OfferService, OfferRepository]
})
export class OfferModule {}
