import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'CreatPointDto', async: false })
export class ValidationOffers implements ValidatorConstraintInterface {
  validate(offers: number[] | []) {
    if (offers.length === 0) {
      return true;
    }

    if ((offers.find((photo) => typeof photo === 'number'))) {
      return true;
    }

    return false;
  }
}
