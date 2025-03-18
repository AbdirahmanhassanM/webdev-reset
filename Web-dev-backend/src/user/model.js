import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});

userSchema.set("toJSON", {
    transform: (document, returnedObject) => {
        delete returnedObject.password;
    },
});

userSchema.method.comparePassword = async function (password) {
    return compareTohash(password, this.password);
};

export default mongoose.model("User", userSchema);