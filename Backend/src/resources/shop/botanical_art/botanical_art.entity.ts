import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("botanical_art")
export class BotanicalArt {
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
}
