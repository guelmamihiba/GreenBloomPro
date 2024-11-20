// shop/essential-oils/essential-oil.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("essentional_oils")
export class EssentionalOils {
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
