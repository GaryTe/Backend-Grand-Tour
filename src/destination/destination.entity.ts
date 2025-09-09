import { Entity, PrimaryColumn, Column } from 'typeorm';

import { DestinationType } from 'src/libs/enum';

@Entity('destination')
export class DestinationEntity {
    @PrimaryColumn()
    public id: number;
    @Column({type: 'text', nullable: true})
    public description: string;
    @Column({type: 'enum', enum: DestinationType})
    public name: DestinationType;
    @Column({type: 'jsonb'})
    public pictures: Array<Object> | []
  }