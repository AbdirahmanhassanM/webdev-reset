import config from "./config";
import mongoose from "mongoose";

export default function connect() {
    return mongoose.connect(config.mongoDbURL, {
    });
}
