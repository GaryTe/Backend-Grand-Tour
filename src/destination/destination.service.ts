import { Injectable } from '@nestjs/common';

import { DestinationRepository } from './destination.repository';
import { Destination } from 'src/libs/type';

@Injectable()
export class DestinationService {
  constructor(private readonly destinationRepository: DestinationRepository) {}

  public async getDestinationByName(
    nameDestination: string,
  ): Promise<Destination> {
    const destination =
      await this.destinationRepository.getDestinationByName(nameDestination);

    return destination;
  }

  public async getDestinationById(id: string): Promise<Destination> {
    const destination = await this.destinationRepository.getDestinationById(id);

    return destination;
  }
}
