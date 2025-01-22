import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tools {
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
    category: string;
}
