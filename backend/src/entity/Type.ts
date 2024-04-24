import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Product } from "./Product";

@Entity()
export class Type {
    @PrimaryGeneratedColumn()
    type_id: number;

    @Column({ length: 255, nullable: true })
    type_name: string;
    products: Product;
}
