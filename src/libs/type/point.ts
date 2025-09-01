import { Offer, TypeList } from './offer';

export type Point = {
  basePrice: number;
  dataFrom: string;
  dataTo: string;
  destination: number | null;
  id: number;
  offers: Offer | Array<number>;
  type: TypeList;
};
