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
    return res.status(201).send(customer);
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
      closing: req.body.closing,
      cuisine: req.body.cuisine,
      city: req.body.city
    });
    await restaurant.save();
    return res.status(201).send(restaurant);
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
      return res.json({ _id: restaurant._id });
    } else {
      return res.status(401).json({ message: 'Incorrect password' });
    }
  } catch (err) {
    next(err);
  }
})

//get all restaurants
app.get('/api/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

//get one restaurant by id
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

//get one customer by id
app.get('/api/customer/:id', async (req, res) => {
  try {

    const customerId = req.params.id;
    const customer = await Customer.findById(customerId);

    res.send(customer);
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
})

//Update restaurant informations
app.patch('/api/restaurant', async (req, res) => {
  try{ 
    const restaurant = await Restaurant.findByIdAndUpdate(req.body._id, {
      restaurantName: req.body.restaurantName,
      opening: req.body.opening,
      closing: req.body.closing,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    });
    res.json({ status: 'updated' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
})

//Update customer informations
app.patch('/api/customer', async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(req.body._id, {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    });
    res.json({ status: 'updated' });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ error: err.message });
  }
})


//add tables
app.post('/api/table/:id', async (req, res) => {
  try{
    const restaurantId = req.params.id;
    const reqTable = req.body;
    const table = {
      available: reqTable.available,
      id: Number(reqTable.id),
      seats: Number(reqTable.seats)
    }
    const restaurant = await Restaurant.findById(restaurantId);
    const tables = restaurant.tables;
    tables.push(table);
    await Restaurant.findByIdAndUpdate(restaurantId, {tables: tables});
    res.send({status: 'added', id: '', seets: ''});
  } catch(err){
    console.log(err.message);
    return res.status(500).send({error: err.message});
  }
})

//add reservation
app.post('/api/reservations', async (req, res, next) => {
  try {
    const customerId = req.body.customerId;
    const restaurantId = req.body.restaurantId;
    const numberOfGuests = Number(req.body.numberOfGuests);
    const restaurant = await Restaurant.findById(restaurantId);
    const tables = restaurant.tables;
    const availableTables = tables.filter((table) => table.available === true);
    const sortedTables = availableTables.sort((a,b) => a.seats - b.seats);
    const table = sortedTables.find((table) => {
      return table.seats >= numberOfGuests && table.seats <= numberOfGuests + 2;
    });
    if (!table) {
      return res.status(404).send({error: "Table not found"});
    }
    const updatedTables = restaurant.tables.map((currentTable) => {
      if (currentTable.id === table.id) {
        currentTable.available = false;
      }
      return currentTable;
    })
    await Restaurant.findByIdAndUpdate(restaurantId, {tables: updatedTables});
    const reservation = {
      numberOfGuests: numberOfGuests,
      customerId: customerId,
      restaurantId: restaurantId,
      tableId: table.id
    }
    await Reservation.create(reservation);
    return res.json({message: "Table booked"});
  } catch (err) {
    next (err);
  }
})

//get all reservations for one customer by id













//get restaurant reservations
app.get('/api/restaurant/reservations/:id', async (req, res) => {
  try{
    const restaurantId = req.params.id;
    const reservations = await Reservation.find({restaurantId: restaurantId});

    const customers = await Promise.all(reservations.map(reservation => Customer.find({customerId: reservation.customerId})));
    console.log(customers);

    res.send(customers);
  } catch(err){
    console.log(err.message);
    return res.status(500).send({error: err.message});
  }
})


app.listen(3000, () => console.log('Server started on port 3000'));
