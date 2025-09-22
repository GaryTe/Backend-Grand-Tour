import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Param,
  Body,
  UseInterceptors
} from '@nestjs/common';
import type { Request } from 'express';

import { PointService } from './point.service';
import { PointDto } from './dto/point';
import { PointRdo } from './rdo/point';
import { fillObject } from 'src/libs/util'; 
import { Point } from 'src/libs/type';
import { CheckPointDatabaseInterceptor } from 'src/libs/Interceptors'; 

@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  public async getPoints(@Req() req: Request): Promise<PointRdo> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const pointsList = await this.pointService.getPoints(token);

    return fillObject(PointRdo, pointsList);
  }

  @Post()
  public async createPoint(
    @Req() req: Request,
    @Body() dto: PointDto,
  ): Promise<PointRdo> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const point = await this.pointService.createPoint(token, dto);

    return fillObject(PointRdo, point);
  }

  @UseInterceptors(CheckPointDatabaseInterceptor)
  @Put()
  public async editingPoint(
    @Req() req: Request,
    @Body() dto: PointDto,
  ): Promise<PointRdo> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const point = await this.pointService.editingPoint(token, dto);

    return fillObject(PointRdo, point);
  }

  @Delete('/:id')
  public async deletePoint(@Req() req: Request, @Param('id') id: string):  Promise<Point> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const [dataPoint] = await this.pointService.deletePoint(token, id);

    return dataPoint;
  }
}
