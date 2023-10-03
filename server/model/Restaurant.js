import mongoose from "mongoose";
const { Schema, model } = mongoose;

const restaurantSchema = new Schema({
  restaurantName: {
    type: String,
    required: true
  },
  address: {
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    street: {
      type: String,
      required: true,
    },
    locationNumber: {
        type: Number,
        required: true,
      }
  },
  opening: String,
  closing: String,
  email: {
    type: String,
    required
  },
  phoneNumber: {
    type: String,
    required: true
  }
});

export default model("Restaurant", restaurantSchema);
