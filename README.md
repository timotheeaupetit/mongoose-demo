## User Manual
### Introduction
This API was developed in the frame of my developer training at IMIE (Feb. 2018). 
The goal was to create a program to interact with a local MongoDB database, using [Mongoose](http://mongoosejs.com/). 
A simple CRUD was implemented, in order to manage a collection of `users`, defined by a `name` and a `born` (date of birth)

0. Project setup
* Clone the project on your computer: `git@github.com:BalticWolf/mongoose-demo.git`
* Type $`npm install` to retrieve all the necessary node_modules

0. Run MongoDB
* Make sure you have [MongoDB](https://www.mongodb.com/download-center#community) is installed on your computer
* Run MongoDB on your machine (type $`mongo` or $`mongod` depending on your system)

0. Run the application
* Type `npm start`
* By default, the application runs on `http://localhost:3000`

0. Start using the API
Here are the routes already implemented:
* **GET** /users/:id -> get a user by its id
* **PUT** /users/:id -> update a user by its id; data to update is found in the request boby
* **DELETE** /users/:id -> delete a user by its id
* **GET** /users -> get a list of all users
* **POST** /users -> create a new user
* **GET** /publications -> get a list of all publications
* **GET** /authors -> get a list of all authors

To test these routes you can use Postman, either as the [standalone client](https://www.getpostman.com/postman), or as the [web browser extension](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)