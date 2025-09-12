import {IsOptional, IsUUID, IsNumber, IsISO8601, IsArray, Validate, IsEnum} from 'class-validator';

import { ValidationOffers } from 'src/libs/functions-validation';
import { PointType} from 'src/libs/enum';
import { PointDtoValidationMessageForPoint } from 'src/libs/error-validation';

export class PointDto {
  @IsOptional()
  @IsUUID('all', {message: PointDtoValidationMessageForPoint.id})
  public id?: string;
  @IsNumber({}, {message: PointDtoValidationMessageForPoint.basePrice})
  public basePrice: number;
  @IsISO8601({strict: true}, {message: PointDtoValidationMessageForPoint.dataFrom})
  public dataFrom: string;
  @IsISO8601({strict: true}, {message: PointDtoValidationMessageForPoint.dataTo})
  public dataTo: string;
  @IsNumber({}, {message: PointDtoValidationMessageForPoint.destination})
  public destination: number;
  @IsOptional()
  @IsArray({message: PointDtoValidationMessageForPoint.offers.isArray})
  @Validate(ValidationOffers, {message: PointDtoValidationMessageForPoint.offers.isArrayWithNumber})
  public offers: number[] | [];
  @IsEnum(PointType, {message: PointDtoValidationMessageForPoint.type})
  public type: string;
}
