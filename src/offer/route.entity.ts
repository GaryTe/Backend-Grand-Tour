import { Entity, PrimaryColumn, Column } from 'typeorm';

import { PointType } from 'src/libs/enum';

@Entity('route')
export class RouteEntity {
  @PrimaryColumn({ type: 'enum', enum: PointType })
  public type: PointType;
  @Column({ type: 'jsonb'})
  public offers: number[] | [];
}
