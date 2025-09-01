export type Destination = {
  id: number;
  description: string;
  name: string;
  pictures: Picture;
};

export type Picture = {
      src: string;
      description: string;
    }[] | [];
