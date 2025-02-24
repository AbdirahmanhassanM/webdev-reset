import mongose from 'mongoose';
import { ESModulesEvaluator } from 'vite/module-runner';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {    
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },

}, {timestamps: true});