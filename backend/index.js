import express from 'express';
import cors from 'cors';

import {MongoClient, ObjectId} from 'mongodb';
const mgurl = "mongodb+srv://dhivaan2509:dhivaan2325@dhivaan.akuq9.mongodb.net//";
const app = express();

app.use(cors());
 app.use(express.json());
 let prodCollection;
let cartCollection;
async function connect(){
    const client  = new MongoClient(mgurl);
    try{
        await client.connect();
        console.log("connected");
        const database = client.db("ecommerce");
        prodCollection = database.collection("prodCollection");
        cartCollection = database.collection("cartCollection");
        const result = await prodCollection.deleteOne({_id: new ObjectId('671f7653a5dd254078d76f5f')})

       
        
    }
    catch(e){
        console.log("error-", e)
    }


}
app.get("/products", async (req, res) => {
    const products = await ProductCollection.find().toArray()
    res.status(200).json(products)
})
app.get("/products-list", async (req, res) => {
    const products = await prodCollection.find().toArray()
    res.status(200).json(products)
    console.log(products);
    
})

app.post("/products-list", async (req, res) => {
    const newproduct = req.body;
    const result = await prodCollection.insertOne(newproduct);
    res.status(200).json(result);
});

app.get("/cart-list", async (req, res) => {
    const cartItems = await cartCollection.find().toArray();
    res.status(200).json(cartItems);
});

app.post("/cart-list", async (req, res) => {
    const cartItem = req.body;
    const result = await cartCollection.insertOne(cartItem);
    res.status(201).json(result);
});

app.put("/cart-list/:id", async (req, res) => {
    const { id } = req.params;
    const updatedCartItem = req.body;
    const result = await cartCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedCartItem }
    );
    res.status(200).json(result);
});

app.delete("/cart-list/:id", async (req, res) => {
    const { id } = req.params;
    const result = await cartCollection.deleteOne({ _id: new ObjectId(id) });
    res.status(200).json(result);
});

app.delete("/cart-list", async (req, res) => {
    const result = await cartCollection.deleteMany({});
    res.status(200).json(result);
});



    connect()
app.listen(5001,()=>{
    console.log("server started on 5001")
})

