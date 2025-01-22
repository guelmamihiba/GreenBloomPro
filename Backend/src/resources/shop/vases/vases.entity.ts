import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("vases")
export class Vases {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    name: string;

    @ApiProperty()
    @Column()
    description: string;

    @ApiProperty()
    @Column()
    price: number;

    @ApiProperty()
    @Column()
    imageUrl: string;

    @ApiProperty()
    @Column()
    sizing: string; // If applicable
}
