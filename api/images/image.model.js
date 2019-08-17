/*
@author: Muhammad Mehdi
@date: October 02, 2018
*/

//Dependencies
const mongoose = require("mongoose");

//Defining Schema --> TENTATIVE IMAGE SCHEMA
const imageSchema = mongoose.Schema({
  entityId: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const ImageModel = (exports.ImageModel = mongoose.model(
  "ImageModel",
  imageSchema
));
