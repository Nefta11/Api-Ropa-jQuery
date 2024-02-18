import { Schema, model } from "mongoose";

const clothesSchema = new Schema({
    urlImg: String ,
    code: {
        type: String,
        unique: true,
        require: true
    },
    team: {
        type: String,
        required: true
    },
    price: Number,
    size: String,
    color: String,
    stock: Number,
    season: String,
    status: Number,
   }, {
    versionKey: false,
    timestamps: true
});

export default model('clothes', clothesSchema);
