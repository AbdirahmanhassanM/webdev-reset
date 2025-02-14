import mongoose from 'mongoose'

export fucntion connect(){ 
    return mongoose.connect(process.env.MONGODB_URI)}