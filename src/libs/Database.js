import mongoose from 'mongoose';

import dotenv from 'dotenv';
dotenv.config();

const connectDatabase = async () => {
    console.log("---1---inside connect-");
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
};


export default connectDatabase;

