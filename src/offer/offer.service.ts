import { Injectable } from '@nestjs/common';

import { OfferRepository } from './offer.repository.';
import { OffersByType } from 'src/libs/type';

@Injectable()
export class OfferService {
  constructor(private readonly offerRepository: OfferRepository) {}

  public async getOffer(typePoint: string): Promise<OffersByType> {
    const offer = await this.offerRepository.getOffer(typePoint);

    return offer;
  }
}
