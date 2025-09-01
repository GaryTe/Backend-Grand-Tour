import { Injectable } from '@nestjs/common';

import { Point } from 'src/libs/type';
import { TypePoint } from 'src/libs/enum';
import { PointDto } from './dto/point';

@Injectable()
export class PointRepository {
  public async getPoints(token: string): Promise<Array<Point>> {
    return [
      {
        basePrice: 100,
        dataFrom: '2025-07-21T11:30:59.000Z',
        dataTo: '2025-07-21T12:00:59.000Z',
        destination: null,
        id: 1,
        offers: [],
        type: TypePoint.Taxi,
      },
      {
        basePrice: 50,
        dataFrom: '2025-07-10T12:30:59.000Z',
        dataTo: '2025-07-10T12:40:59.000Z',
        destination: null,
        id: 2,
        offers: [1, 2],
        type: TypePoint.Bus,
      },

      {
        basePrice: 100,
        dataFrom: '2025-08-10T11:30:59.000Z',
        dataTo: '2025-09-07T12:00:59.000Z',
        destination: null,
        id: 3,
        offers: [],
        type: TypePoint.Restaurant,
      },
    ];
  }

  public async createPoint(token: string, dto: PointDto): Promise<Point> {
    return {
      basePrice: 100,
      dataFrom: '2025-07-21T11:30:59.000Z',
      dataTo: '2025-07-21T12:00:59.000Z',
      destination: null,
      id: 1,
      offers: [],
      type: TypePoint.Taxi,
    };
  }

  public async editingPoint(token: string, dto: PointDto): Promise<Point> {
    return {
      ...dto,
      id: 4,
    };
  }

  public async deletePoint(token: string, id: string) {}
}
