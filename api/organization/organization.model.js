/** 
    @author: Syed Saad Qamar
    @date: July 30, 2018
*/

//Dependencies
const mongoose = require('mongoose');

//Defining Schema --> TENTATIVE ORGANIZATION SCHEMA
const organizationSchema = mongoose.Schema(
    {
        //organizationId --> auto-generated
        userId: {
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
        imageUrl:
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

const OrganizationModel = exports.OrganizationModel = mongoose.model('OrganizationModel', organizationSchema);