/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Application dependencies
    //custom dependencies
const server = require('./server');

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


//Running the server
server.run(app, 3000);