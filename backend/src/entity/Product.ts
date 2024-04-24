import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Type } from "./Type";
import { User } from "./User";

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    product_id: number;

    @Column({ length: 255 })
    product_name: string;

    @Column({ length: 255 })
    product_information: string;

    @Column("decimal", { precision: 10, scale: 2 })
    product_price: number;

     @Column({nullable:true})
    product_img: string;

    @ManyToOne(() => Type)
    @JoinColumn({ name: 'type_id' })
    type: Type;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'users_id' })
    user: User;
}
