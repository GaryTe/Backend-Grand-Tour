import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PointController } from './point.controller';
import { PointService } from './point.service';
import { PointRepository } from './point.repository';
import { PointEntity } from './point.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PointEntity])],
  controllers: [PointController],
  providers: [PointService, PointRepository]
})
export class PointModule {}
