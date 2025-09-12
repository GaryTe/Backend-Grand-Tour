export const PointDtoValidationMessageForPoint = {
  id: `ValidationError: Type of key 'id' UUID`,
  basePrice: `ValidationError: Type of key 'basePrice' number`,
  dataFrom: `ValidationError: Type of key 'dataFrom' ISO8601`,
  dataTo: `ValidationError: Type of key 'dataTo' ISO8601`,
  destination: `ValidationError: Type of key 'destination' number`,
  offers: {
    isArray: `ValidationError: Type of key 'offers' Array`,
    isArrayWithNumber: `ValidationError: Type of key 'offers' Array<number> | Array`,
  },
  type: `ValidationError: Value of key 'type' : bus, taxi, restaurant, train, ship, drive, flight, check-in, sightseeing`,
};
