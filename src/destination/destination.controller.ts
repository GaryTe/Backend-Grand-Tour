import { Controller, Get, Query, Param } from '@nestjs/common';

import { DestinationService } from './destination.service';
import { Destination } from 'src/libs/type';

@Controller('destinations')
export class DestinationController {
  constructor(private readonly destinationService: DestinationService) {}

  @Get()
  public async getDestinationByName(
    @Query('nameDestination') nameDestination: string,
  ): Promise<Destination> {
    const destination =
      await this.destinationService.getDestinationByName(nameDestination);

    return destination;
  }

  @Get('/:id')
  public async getDestinationById(
    @Param('id') id: string,
  ): Promise<Destination> {
    const destination = await this.destinationService.getDestinationById(id);

    return destination;
  }
}
