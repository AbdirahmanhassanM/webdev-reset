import dotenv from "dotenv";

dotenv.config(); 
console.log(process.env.MONGO_URL);

export default {
    port: process.env.PORT || 3000,
    mongoURL: process.env.MONGO_URL,
}