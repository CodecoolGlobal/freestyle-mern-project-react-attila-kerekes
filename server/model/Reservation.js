import mongoose from "mongoose";
const {Schema, model} = mongoose;

const reservationSchema = new Schema({
    restaurantId: String,
    customerId: String,
    numberOfGuests: Number,
    tablesBooked: ?,
    createdAt: Date,
    updatedAt: Date
})

export default model('Reservation', reservationSchema);