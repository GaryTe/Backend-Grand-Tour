import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Observable } from 'rxjs';

import { PointEntity } from 'src/point/point.entity';

@Injectable()
export class CheckPointDatabaseInterceptor implements NestInterceptor {
  constructor(
    @InjectRepository(PointEntity)
    private pointRepository: Repository<PointEntity>,
  ) {}

  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const {
      headers: { authorization },
      body: { id },
    } = context.switchToHttp().getRequest();
    const [, token] = authorization.split(' ');

    const dataPoint = await this.pointRepository.manager.findOne(PointEntity, {
      where: {
        id: id,
        user: token,
      },
    });

    if (!dataPoint) {
      throw new BadRequestException(`Point with this ${id}, does not exist in the database, or not created by this user ${token}.`);
    }

    return next.handle();
  }
}
