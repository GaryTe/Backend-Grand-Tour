import { Injectable } from '@nestjs/common';

import { PointRepository } from './point.repository';
import { Point } from 'src/libs/type';
import { PointDto } from './dto/point';

@Injectable()
export class PointService {
  constructor(private readonly pointRepository: PointRepository) {}

  public async getPoints(token: string): Promise<Array<Point>> {
    const pointsList = await this.pointRepository.getPoints(token);

    return pointsList;
  }

  public async createPoint(token: string, dto: PointDto): Promise<Point> {
    const pointsList = await this.pointRepository.createPoint(token, dto);

    return pointsList;
  }

  public async editingPoint(token: string, dto: PointDto): Promise<Point> {
    const point = await this.pointRepository.editingPoint(token, dto);

    return point;
  }

  public async deletePoint(token: string, id: string) {
    await this.pointRepository.deletePoint(token, id);
  }
}
