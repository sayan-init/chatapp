import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongo DB connected:", conn.connection.host)
    } catch (error) {
        console.error("Error connecting to mongo db: ", error)
        process.exit(1); // 1 status code means fail and 0 means success
    }
}; 