/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Application dependencies
    //custom dependencies
const server = require('./server');
const connection = require('./connection.mongoose');
const authentication = require('./authentication.mongoose');
const userRouter = require('./models/user-model/user.router');

    //npm dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();

//Middlewares
app.use(express.json());    //To parse json objects sent by the client.
app.use(cors());            //To resolve cross-origin browser issues.

//Http requests

//userRouter
userRouter.createRoutes(app, jwt, authentication.verifyToken);

//Validating the user on Login
authentication.validateUser(app, jwt);

//Running the server
server.run(app, 3000);

//Connecting to database
connection.connect(mongoose);