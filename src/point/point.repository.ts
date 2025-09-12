import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Point } from 'src/libs/type';
import { PointDto } from './dto/point';
import { PointEntity } from './point.entity';

@Injectable()
export class PointRepository {
  constructor(
    @InjectRepository(PointEntity)
    private pointRepository: Repository<PointEntity>,
  ) {}

  public async getPoints(token: string): Promise<Array<Point>> {
    const dataPoints = await this.pointRepository.query(`
      SELECT * FROM point
      WHERE point.user = '${token}'
      `);

    for await (const point of dataPoints) {
      if (!point.destination) {
        point.destination = null;
      } else {
        const [dataDestination] = await this.pointRepository.query(`
      SELECT * FROM destination
      WHERE destination.id = ${point.destination}
      `);

        point.destination = dataDestination;
      }
    }

    for await (const point of dataPoints) {
      if (point.offers.length > 0) {
        const offersList = await this.pointRepository.query(`
      SELECT *
      FROM offer
      WHERE offer.id IN(${point.offers.toString()})
    `);

        point.offers = offersList;
      }
    }

    return dataPoints;
  }

  public async createPoint(token: string, dto: PointDto): Promise<Point> {
    let value = dto.offers.length > 0 ? dto.offers : [0];

    const [dataPoint] = await this.pointRepository.query(
      `
      INSERT INTO point
        VALUES (
        DEFAULT, $1, $2, $3, $4, $5, $6, $7
        )
        RETURNING *
      `,
      [
        dto.dataFrom,
        dto.dataTo,
        dto.destination,
        dto.offers,
        dto.type,
        dto.basePrice,
        token,
      ],
    );

    const [dataDestination] = await this.pointRepository.query(`
      SELECT *
      FROM destination
      WHERE destination.id = ${dto.destination}
      `);

    const offersList = await this.pointRepository.query(`
      SELECT *
      FROM offer
      WHERE offer.id IN(${value.toString()})
    `);

    return {
      ...dataPoint,
      destination: dataDestination ?? null,
      offers: offersList ?? [],
    };
  }

  public async editingPoint(token: string, dto: PointDto): Promise<Point> {
    let value = dto.offers.length > 0 ? dto.offers : [0];

    const [dataPoint] = await this.pointRepository.query(
      `
      WITH dataPoint AS (
      DELETE FROM point
      WHERE point.id = '${dto.id}' AND point.user = '${token}'
      )
      INSERT INTO point
        VALUES (
        DEFAULT, $1, $2, $3, $4, $5, $6, $7
        )
        RETURNING *
      `,
      [
        dto.dataFrom,
        dto.dataTo,
        dto.destination,
        dto.offers,
        dto.type,
        dto.basePrice,
        token,
      ],
    );

    const [dataDestination] = await this.pointRepository.query(`
      SELECT *
      FROM destination
      WHERE destination.id = ${dto.destination}
      `);

    const offersList = await this.pointRepository.query(`
      SELECT *
      FROM offer
      WHERE offer.id IN(${value.toString()})
    `);

    return {
      ...dataPoint,
      destination: dataDestination ?? null,
      offers: offersList ?? [],
    };
  }

  public async deletePoint(token: string, id: string): Promise<Array<Point> | []> {
    const [dataPoint] = await this.pointRepository.query(`
      DELETE FROM point
      WHERE point.id = '${id}' AND point.user = '${token}'
    `);

    return dataPoint;
  }
}
