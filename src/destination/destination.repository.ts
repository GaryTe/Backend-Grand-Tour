import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Destination } from 'src/libs/type';
import { DestinationEntity } from './destination.entity';

@Injectable()
export class DestinationRepository {
  constructor(
    @InjectRepository(DestinationEntity)
    private destinationRepository: Repository<DestinationEntity>,
  ) {}

  public async getDestinationByName(
    nameDestination: string,
  ): Promise<Destination> {
    const [dataDestination] = await this.destinationRepository.query(`
      SELECT *
      FROM destination
      WHERE destination.name = '${nameDestination}'
      `);

    return dataDestination;
  }

  public async getDestinationById(
    id: string,
  ): Promise<Destination> {
    const [dataDestination] = await this.destinationRepository.query(`
      SELECT *
      FROM destination
      WHERE destination.id = '${id}'
      `);

    return dataDestination;
  }
}
