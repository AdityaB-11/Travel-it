import mongoose from 'mongoose';

 
const connectDB = async () => {
    const connectionUrl = process.env.DB_URI ||  'mongodb://localhost:27017/travel';;
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectDB;