import { Injectable } from '@nestjs/common';

import { DestinationRepository } from './destination.repository';
import { Destination } from 'src/libs/type';

@Injectable()
export class DestinationService {
  constructor(private readonly destinationRepository: DestinationRepository) {}

  public async getDestination(nameDestination: string): Promise<Destination> {
    const destination = await this.destinationRepository.getDestination(nameDestination);

    return destination;
  }
}
