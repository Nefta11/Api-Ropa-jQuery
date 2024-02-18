import { Schema, model } from "mongoose";

const clothesSchema = new Schema({
    code:{
        type:String,
        unique:true,
        require:true
    },
    team: {
        type: String,
        required: true
    },
    price: Number,
    size:String,
    color: String,
    stock: Number,
    releaseDate: String,
    status: Number
}, {
    versionKey: false,
    timestamps: true
});


export default model ('clothes',clothesSchema);