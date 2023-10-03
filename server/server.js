import mongoose from "mongoose";
import express from "express";

import Customer from "./model/Customer";
import Reservation from "./model/Reservation";
import Restaurant from "./model/Restaurant";

mongoose.connect("mongodb+srv://restaurant:restaurant1@restaurant.feqcs03.mongodb.net/")

const app = express();

app.use(express.json());

// CUSTOMER requests

//GET api/customers/:id
app.get('/api/customers/:id', async (req, res) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findById(customerId)
    if (!customer) {
      return res.status(404).json({ success: false, message: 'Customer not found' });
    }
    res.json({ success: true, customer })
  } catch (error) {
    console.error('Error fetching customer:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//GET api/restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//POST api/reservation
app.post('/api/reservation', (req, res) => {
  const restaurantId = ;
  const customerId = ;
  const numberOfGuests = ;
  const tablesBooked = ;
  const createdAt = Date.now();
  const updatedAt = Date.now();

  const reservation = new Reservation({
    restaurantId,
    customerId,
    numberOfGuests,
    tablesBooked,
    createdAt,
    updatedAt
  })
  reservation.save()
    .then(reservation => res.json(reservation))
    .catch(err => res.status(400).json({ success: false }))
})

app.listen(3000, () => console.log('Server started on port 3000'));
