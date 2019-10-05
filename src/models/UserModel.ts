import * as mongoose from "mongoose";
import { Schema } from "mongoose";
const dependentsSchema = new Schema({name: String, birthday: String})
const userSchema = new Schema({
    name: String, 
    email: String,
    birthday: String,
    address: String,
    addressNumber: String,
    complement: String,
    phone: String,
    whatsApp: String,
    dependents: [dependentsSchema]     

}) 
export const User = mongoose.model("User", userSchema)