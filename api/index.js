import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/userRoutes.js';
import authRouter from './routes/authRoutes.js';

//Database connection
try {
    mongoose.connect(process.env.MONGO_DB);
    console.log(`connected to MongoDb`);

} catch (error) {
    console.log(error);
}

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log(`Server is runnig on port 3000`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);