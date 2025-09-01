import { Injectable } from '@nestjs/common';

import { Destination } from 'src/libs/type';

@Injectable()
export class DestinationRepository {
  public async getDestination(nameDestination: string): Promise<Destination> {
    return {
      id: 1,
      description:
        'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
      name: 'Geneva',
      pictures: [
        {
          src: 'img/photos/1.jpg',
          description: '',
        },
        {
          src: 'img/photos/2.jpg',
          description: '',
        },
        {
          src: 'img/photos/3.jpg',
          description: '',
        },
        {
          src: 'img/photos/4.jpg',
          description: '',
        },
        {
          src: 'img/photos/5.jpg',
          description: '',
        },
      ],
    };
  }
}
