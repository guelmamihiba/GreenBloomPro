import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Homewares {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

    @Column()
    imageUrl: string;

    @Column()
    category: string;

    @Column()
    dimensions: string; // If applicable
}