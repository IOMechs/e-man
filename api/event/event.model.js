/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Dependencies
const mongoose = require('mongoose');

//Defining Schema --> TENTATIVE EVENT SCHEMA
const eventSchema = mongoose.Schema(
    {
        //eventId --> auto-generated
        organizationId: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        description: 
        {
            type: String,
            required: true
        },
        eventDate: 
        {
            type: Date,
            required: true
        },
        eventImage:
        {
            type: String,
            required: false
        },
        createdAt:  //The date when the post for the event will be created.
        {
            type: Date,
            required: true,
            default: Date.now
        }
    }
);

const EventModel = exports.EventModel = mongoose.model('EventModel', eventSchema);