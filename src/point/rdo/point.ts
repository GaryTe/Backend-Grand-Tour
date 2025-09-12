import { Expose, Type } from 'class-transformer';

export class PointRdo {
  @Expose()
  public id?: string;
  @Expose({ name: 'base_price' })
  public basePrice: number;
  @Expose({ name: 'data_from' })
  public dataFrom: string;
  @Expose({ name: 'data_to' })
  public dataTo: string;
  @Expose()
  public destination: number;
  @Expose()
  public offers: number[] | [];
  @Expose()
  public type: string;
}
