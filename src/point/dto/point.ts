import { Offer, TypeList } from "src/libs/type";

export class PointDto {
  public basePrice: number;
  public dataFrom: string;
  public dataTo: string;
  public destination: number | null;
  public offers: Offer | Array<number>;
  public type: TypeList;
}
