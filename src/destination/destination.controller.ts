import { Controller, Get, Query } from '@nestjs/common';

import { DestinationService } from './destination.service';
import { Destination } from 'src/libs/type';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  public async getDestination(@Query('nameDestination') nameDestination: string): Promise<Destination> {
    const destination = await this.destinationService.getDestination(nameDestination);

    return destination;
  }
}
