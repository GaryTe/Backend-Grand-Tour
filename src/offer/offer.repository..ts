import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { OffersByType } from 'src/libs/type';
import { RouteEntity } from './route.entity';

@Injectable()
export class OfferRepository {
  constructor(
    @InjectRepository(RouteEntity)
    private routeRepository: Repository<RouteEntity>,
  ) {}

  public async getOffer(typePoint: string): Promise<OffersByType> {
    const [dataRoute] = await this.routeRepository.query(`
      SELECT * 
      FROM route
      WHERE route.type = '${typePoint}' 
      `);

    let value = dataRoute.offers.length > 0 ? dataRoute.offers : [0];

    const offersList = await this.routeRepository.query(`
      SELECT *
      FROM offer
      WHERE offer.id IN(${value.toString()})
    `);

    return {
      ...dataRoute,
      offers: offersList ?? [],
    };
  }
}
