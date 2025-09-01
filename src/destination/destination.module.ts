import { Module } from '@nestjs/common';
import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import { DestinationRepository } from './destination.repository';

@Module({
  controllers: [DestinationController],
  providers: [DestinationService, DestinationRepository]
})
export class DestinationModule {}
