import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('offer')
export class OfferEntity {
  @PrimaryColumn()
  public id: number;
  @Column({ type: 'text' })
  public title: string;
  @Column({ type: 'integer' })
  public price: number;
}
