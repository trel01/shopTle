import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./entity/User"
import { Type } from "./entity/Type"
import { Product } from "./entity/Product"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "483312",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [Product,Type,User],
    migrations: [],
    subscribers: [],
})
