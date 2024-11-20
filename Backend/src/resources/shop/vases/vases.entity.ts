import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("vases")
export class Vases {
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
    sizing: string; // If applicable
}
