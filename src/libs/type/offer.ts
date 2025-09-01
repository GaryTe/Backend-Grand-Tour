import { TypePoint } from '../enum/index';

export type OffersByType = {
  type: TypeList;
  offers: Offer;
};

export type Offer = {
  id: number;
  title: string;
  price: number;
}[] | [];

export type TypeList = (typeof TypePoint)[keyof typeof TypePoint];
