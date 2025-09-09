import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Param,
  Body,
} from '@nestjs/common';
import type { Request } from 'express';

import { PointService } from './point.service';
import { Point } from 'src/libs/type';
import { PointDto } from './dto/point';

@Controller('points')
export class PointController {
  constructor(private readonly pointService: PointService) {}

  @Get()
  public async getPoints(@Req() req: Request): Promise<Array<Point>> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const pointsList = await this.pointService.getPoints(token);

    return pointsList;
  }

  @Post()
  public async createPoint(
    @Req() req: Request,
    @Body() dto: PointDto,
  ): Promise<Point> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const point = await this.pointService.createPoint(token, dto);

    return point;
  }

  @Put()
  public async editingPoint(
    @Req() req: Request,
    @Body() dto: PointDto,
  ): Promise<Point> {
    const [, token] = req.headers?.authorization?.split(' ') as string[];
    const point = await this.pointService.editingPoint(token, dto);

    return point;
  }

  @Delete('/:id')
  public async deletePoint(@Param('id') id: string) {
    await this.pointService.deletePoint(id);
  }
}
