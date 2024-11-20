import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tools {
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
}
