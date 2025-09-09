import { TypeList } from 'src/libs/type';

export class PointDto {
  public id?: string;
  public basePrice: number;
  public dataFrom: string;
  public dataTo: string;
  public destination: number | null;
  public offers: number[] | [];
  public type: TypeList;
}
