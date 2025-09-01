import { Controller, Get, Query } from '@nestjs/common';

import { OfferService } from './offer.service';
import { OffersByType } from 'src/libs/type';

@Controller('offers')
export class OfferController {
  constructor(private readonly offerService: OfferService) {}

  @Get()
  public async getOffer(@Query('typePoint') typePoint: string): Promise<OffersByType> {
    const offer = await this.offerService.getOffer(typePoint);

    return offer;
  }
}
