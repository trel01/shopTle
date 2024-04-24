import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Product } from "./Product";

@Entity()
export class User {
    log(arg0: string) {
        throw new Error("Method not implemented.");
    }
    @PrimaryGeneratedColumn()
    users_id: number;

    @Column({ length: 255 })
    username: string;

    @Column({ length: 255 })
    gender: string;

    @Column({ length: 255 })
    email: string;

    @Column()
    phone: string;

    @Column({ length: 255 })
    address: string;

    @OneToMany(() => Product, (product) => product.user)
    products: Product;
}
