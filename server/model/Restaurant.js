import mongoose from "mongoose";
const {Schema, model} = mongoose;

const restaurantSchema = new Schema({
    restaurantId: String,
    customerId: String,
    numberOfGuests: Number,
    tablesBooked: ?,
    createdAt: Date,
    updatedAt: Date
})

export default model('Restaurant', restaurantSchema);