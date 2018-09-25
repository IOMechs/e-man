/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Application dependencies
    //custom dependencies
const server = require('./server');
require('./connection.mongoose');
const authentication = require('./authentication.mongoose');
const userRouter = require('./api/user/user.router');
const eventRouter = require('./api/event/event.router');
const organizationRouter = require('./api/organization/organization.router');

    //npm dependencies
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const fileRoutes = require('./fileUpload');

const app = express();

//Multer stuff
// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//         callback(null, 'uploads/');
//     },
//     filename: (req, file, callback) => {
//         callback(null, file.originalname + '-' + Date.now()+ '.jpg');
//     }
// });
// const upload = multer({ storage: storage });

//Middlewares
app.use(express.json());    //To parse json objects sent by the client.
app.use(cors());            //To resolve cross-origin browser issues.
app.use('/file',fileRoutes);

//Routes
userRouter.createRoutes(app, jwt, authentication.verifyToken);
eventRouter.createRoutes(app, jwt, authentication.verifyToken);
organizationRouter.createRoutes(app, jwt, authentication.verifyToken);

//Validating the user on Login
authentication.validateUser(app, jwt);

//Running the server
server.run(app, 3000);
