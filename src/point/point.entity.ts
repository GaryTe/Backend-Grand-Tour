import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { PointType } from 'src/libs/enum';

@Entity('point')
export class PointEntity {
  @PrimaryGeneratedColumn('uuid')
  public id: string;
  @Column({ type: 'timestamptz', name: 'data_from' })
  public dataFrom: Date;
  @Column({ type: 'timestamptz', name: 'data_to' })
  public dataTo: Date;
  @Column({type: 'integer', nullable: true})
  public destination: number | null;
  @Column({type: 'integer', array: true})
  public offers: number[];
  @Column({type: 'enum', enum: PointType})
  public type: PointType;
  @Column({type: 'integer', name: 'base_price'})
  public basePrice: number;
  @Column({type: 'text'})
  public user: string;
}
