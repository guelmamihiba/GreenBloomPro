import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("essentional_oils")
export class EssentionalOils {  
   @PrimaryGeneratedColumn()
   @ApiProperty()
    id: number;

   @ApiProperty()
   @Column()
    name: string;

   @ApiProperty()
   @Column()
    description: string;

   @ApiProperty()
   @Column('decimal', { precision: 6, scale: 2 })
    price: number;

   @ApiProperty()
   @Column()
    imageUrl: string;
}
