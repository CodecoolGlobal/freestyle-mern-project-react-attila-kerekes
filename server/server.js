import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcrypt";

import Customer from "./model/Customer.js";
import Reservation from "./model/Reservation.js";
import Restaurant from "./model/Restaurant.js";

mongoose.connect("mongodb+srv://restaurant:restaurant1@restaurant.feqcs03.mongodb.net/")

const app = express();

app.use(express.json());

// CUSTOMER requests

//register customer
app.post('/api/customers', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const customer = new Customer({
      email: req.body.email,
      password: hashedPassword,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phoneNumber: req.body.phoneNumber
    });
    await customer.save();
    res.status(201).send(customer);
  } catch (err) {
    next(err);
  }
})

//login customer
app.post('/api/customers/login', async (req, res, next) => {
  const customer = await Customer.findOne({ email: req.body.email });
  if (customer === null) {
    return res.status(400).json({ message: 'Customer not found' });
  }
  try {
    const isPasswordValid = await bcrypt.compare(req.body.password, customer.password);
    if (isPasswordValid) {
      return res.json({ _id: customer._id });
    } else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    next(err);
  }
})

//register restaurant
app.post('/api/restaurants', async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt)
    const restaurant = new Restaurant({
      email: req.body.email,
      restaurantName: req.body.restaurantName,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword,
      opening: req.body.opening,
      closing: req.body.closing
    });
    await restaurant.save();
    res.status(201).send(restaurant);
  } catch (err) {
    next(err);
  }
})

//login restaurant
app.post('/api/restaurants/login', async (req, res, next) => {
  const restaurant = await Restaurant.findOne({ email: req.body.email });
  if (restaurant === null) {
    return res.status(400).send('Restaurant not found');
  }
  try {
    const isPasswordValid = await bcrypt.compare(req.body.password, restaurant.password);
    if (isPasswordValid) {
      console.log(restaurant);
      return res.json({ _id: restaurant._id });
    } else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    next(err);
  }
})

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
/* app.post('/api/reservation', (req, res) => {
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
}) */

app.get('/api/restaurant/:id', async (req, res) => {
  try {

    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findById(restaurantId);
    
    res.send(restaurant);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
})


//Update restaurant informations
app.patch('/api/restaurant', async (req, res) => {
  try{ 
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log(req.body);
    const restaurant = await Restaurant.findByIdAndUpdate(req.body._id, {
      restaurantName: req.body.restaurantName,
      opening: req.body.opening,
      closing: req.body.closing,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: hashedPassword
    });
    res.json({status: 'updated'});
  } catch(err){
    console.log(err.message);
    return res.status(500).send({error: err.message});
  }
})


app.listen(3000, () => console.log('Server started on port 3000'));
