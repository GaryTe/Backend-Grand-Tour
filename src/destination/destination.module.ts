import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DestinationController } from './destination.controller';
import { DestinationService } from './destination.service';
import { DestinationRepository } from './destination.repository';
import { DestinationEntity } from './destination.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DestinationEntity])],
  controllers: [DestinationController],
  providers: [DestinationService, DestinationRepository],
})
export class DestinationModule {}
