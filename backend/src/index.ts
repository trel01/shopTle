
// import { notEqual } from "assert"
import { AppDataSource } from "./data-source"
import { Product } from "./entity/Product"
import { Type } from "./entity/Type"
import { User } from "./entity/User"
// import { User } from "./entity/User"

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests from this origin
    methods: 'GET,POST',          // Allow only GET and POST requests
    allowedHeaders: 'Content-Type,Authorization' // Allow specific headers
};

// Enable CORS with custom options
app.use(cors(corsOptions));
//------------------------------ index -----------------------------------------------//

AppDataSource.initialize().then(async () => {


    app.get('/index', async (req, res) => {
        const products = await AppDataSource.manager
            .getRepository(Product)
            .find({ relations: ['type'] });
        res.json(products);
    });
    app.get('/product/:product_id', async (req, res) => {
        const product_id = req.params.product_id;
        const product = await AppDataSource.manager
            .createQueryBuilder(Product, 'product')
            .leftJoinAndSelect('product.type', 'type')
            .where('product.product_id = :product_id', { product_id })
            .select([
                'product_id',
                'product_name',
                'product_information',
                'product_price',
                'type.type_name',
                'product_img',
            ])
            .getRawOne();
        res.json(product);
    });
    
    
    
    




























































    // app.post('/index', async (req, res) => {
    //     try {
    //         console.log("Test log", req.body);

    //         console.log("Inserting a new product into the database...");

    //         // ตรวจสอบข้อมูลที่รับเข้ามา
    //         const { product_name, product_information, product_price, type_id } = req.body;
    //         const product = new Product();
    //         product.product_name = product_name;
    //         product.product_information = product_information;
    //         product.product_price = product_price;

    //         // ตั้งค่า type_id ใน Product
    //         const type = await AppDataSource.manager.findOne(Type, { where: { type_id } });
    //         if (!type) {
    //             return res.status(400).json({ error: "Invalid type_id" });
    //         }

    //         product.type = type;

    //         // บันทึก Product ลงในฐานข้อมูล
    //         const savedProduct = await AppDataSource.manager.save(product);

    //         // ส่ง Product ที่บันทึกแล้วกลับไปให้ผู้ใช้
    //         res.status(201).json(savedProduct);
    //     } catch (error) {
    //         console.error("Error inserting product:", error);
    //         res.status(500).json({ error: "Internal server error" });
    //     }
    // });

    // app.get('/index', async (req, res) => {
    //     try {
    //         const product = await AppDataSource.manager.find(Product);
    //         res.json(product);
    //     } catch (error) {
    //         console.error('Error fetching product:', error);
    //         res.status(500).json({ error: 'Internal server error' });
    //     }
    // });

});



//------------------------------ profile -----------------------------------------------//

// AppDataSource.initialize().then(async () => {
//     app.get('/profile', async (req, res) => {
//         try {
//             const user = await AppDataSource.manager.find(User);
//             res.json(user);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });

//     app.post('/profile', async (req, res) => {
//         try {
//             console.log("Test log:", req.body);

//             // ตรวจสอบว่าข้อมูลที่จำเป็นทั้งหมดมีอยู่
//             const { username, gender, email, phone, address } = req.body;

//             if (!username || !gender || !email || !phone || !address) {
//                 return res.status(400).json({ error: "Missing required fields" });
//             }

//             console.log("Inserting a new order into the database...");

//             // สร้างอ็อบเจกต์ User ใหม่
//             const user = new User();
//             user.username = username;
//             user.gender = gender;
//             user.email = email;
//             user.phone = phone;
//             user.address = address;

//             // บันทึกอินสแตนซ์ของ User ลงในฐานข้อมูล
//             const savedUser = await AppDataSource.manager.save(user);

//             // ส่งข้อมูลของ User ที่บันทึกแล้วกลับไปเป็น JSON
//             res.status(201).json(savedUser);
//         } catch (error) {
//             console.error("Error inserting user:", error);
//             res.status(500).json({ error: "Internal server error" });
//         }
//     });

// });
// //------------------------------ type -----------------------------------------------//

// AppDataSource.initialize().then(async () => {
//     app.get('/card', async (req, res) => {
//         try {
//             const type = await AppDataSource.manager.find(Type);
//             res.json(type);
//         } catch (error) {
//             console.error('Error fetching users:', error);
//             res.status(500).json({ error: 'Internal server error' });
//         }
//     });


//     app.post('/card', async (req, res) => {
//         try {
//             console.log("Test log:", req.body);

//             // ตรวจสอบว่าข้อมูลที่จำเป็นทั้งหมดมีอยู่
//             const { type_name } = req.body;

//             if (!type_name) {
//                 return res.status(400).json({ error: "Missing required fields" });
//             }

//             console.log("Inserting a new order into the database...");

//             // สร้างอ็อบเจกต์ User ใหม่
//             const type = new Type();
//             type.type_name = type_name;


//             // บันทึกอินสแตนซ์ของ User ลงในฐานข้อมูล
//             const savedUser = await AppDataSource.manager.save(type);

//             // ส่งข้อมูลของ User ที่บันทึกแล้วกลับไปเป็น JSON
//             res.status(201).json(savedUser);
//         } catch (error) {
//             console.error("Error inserting user:", error);
//             res.status(500).json({ error: "Internal server error" });
//         }
//     });
// });

//---------------------------------------------------------------------//




app.listen(3000, () => {
    console.log('Start server at port 3000.')
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))