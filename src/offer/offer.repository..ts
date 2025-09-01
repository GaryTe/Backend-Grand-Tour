import { Injectable } from '@nestjs/common';

import { OffersByType } from 'src/libs/type'; 
import { TypeList } from 'src/libs/type';

@Injectable()
export class OfferRepository {
  public async getOffer(typePoint: string): Promise<OffersByType> {
    return {
      type: 'taxi',
      offers: [
        {
          id: 1,
          title: 'Salon air conditioning system',
          price: 50,
        },
        {
          id: 2,
          title: 'Loading baggage unloading',
          price: 100,
        },
      ],
    };
  }
}
