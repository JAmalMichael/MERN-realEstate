import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

//Database connection
try {
    mongoose.connect(process.env.MONGO_DB);
    console.log(`connected to MongoDb`);

} catch (error) {
    console.log(error);
}

const app = express();

app.listen(3000, () => {
    console.log(`Server is runnig on port 3000`);
})