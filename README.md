## RESTaurantAPI
This is a web application designed to help restaurants efficiently manage their table reservations.
Besides that, customers also can reserve tables in specific restaurants.
Restaurants can check the user's details (phone number, email, name) who reserved the table.
Restaurant owners can also can update the informations about the restaurant.

As a customer you can reserve tables at restaurants, by amount of seats you would like to reserve.
You can also check your reservations, where you can see the restaurant's informtaion (email, number of guests, phone number).
You can cancel your reservation.

# Technologies
- Node.js
- Express.js
- React.js
- MongoDB
- Mongoose

# Overview
For the project we used MERN stack. In the frontend we used React with React-router to navigate easly through different pages.
In the backend we used Node with Express handle our request and responses to the client side.
For storage we used MongoDB with Mongoose to help our connection and CRUD operations with the database.

## Installation

1. Clone the repository
2. Install server dependencies
    - Navigat to the server folder
        - cd .\server\
    - Install dependencies with `npm install` command
3. Add database connection
    - Navigate to the server folder (like in the previous step)
    - Create .env file based on the .env.sample file
    - Insert your MongoDB connection url

4. Start server
    - Navigate to the server folder (like in the previous step)
    - Start server with `npm run dev` command
5. Install frontend dependencies
    - Navigate to theclient folder
        - cd .\client\
    - Install dependencies with `npm install` command
6. Start frontend server
    - Navigate to the client folder (like in the previous step)
    - Start the client server with `npm run dev` command
7. Visit `http://localhost:5173` in your web browser to access the app.


### Customer Site

- Register as a customer.
- Book a table for a specific date and time.
- Edit or delete previous bookings.

### Manager Site

- Log in as a manager.
- Modify restaurant tables and reservations.
