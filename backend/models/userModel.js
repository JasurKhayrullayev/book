import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: Number,
            required: true,
        },
        password: {
            type: String,
            reduired: false,
        },
    },
    {
        timestamps: true,
    }
)


export const User = mongoose.model('Ca', userSchema);