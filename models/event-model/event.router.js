/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Establishing the routes for event model

//Dependencies
const config = require('../../config');
const fs = require('fs');
const eventModel = require('./event.model');

const EventModel = eventModel.EventModel;

/*
method: addEvent(expressInstance, jwtInstance, verifyToken)
url: domain/event
request object: expects a json object of type { object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
addEvent = function(expressInstance, jwtInstance, verifyToken, multerInstance)
{
    expressInstance.post('/event', verifyToken, multerInstance.single('eventImage'), (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                var newEvent = new EventModel(req.body);
                newEvent.eventImage.data = fs.readFileSync(req.file.path);
                newEvent.eventImage.fileInfo = req.file;
                console.log(req.file);
                newEvent.save( (err, dbObject) => {
                    if(err)
                    {
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "event": dbObject });
                    }
                });
                
                // EventModel.create(req.body, (err, dbObject) => {
                //     if (err) 
                //     {
                //         res.status(400).send("Bad request");
                //     }
                //     else 
                //     {
                //         console.log(req.body);
                //         console.log(req.file);
                        
                //         res.json({ "event": dbObject });
                //     }
                // });
            }
        });
    });
}

/*
method: updateEvent(expressInstance, jwtInstance, verifyToken)
url: domain/event?_id
request object: expects a json object of type { "event": object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
updateEvent = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/event', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { _id: req.query._id };
                const options = { new: true };

                EventModel.findOneAndUpdate(query, req.body.event, options, (err, dbObject) => {
                    if (err) 
                    {
                        res.status(400).send("Bad request");
                    }
                    else 
                    {
                        res.json({ "event": dbObject });
                    }
                });
            }
        });
    });
}

/*
method: deleteEvent(expressInstance, jwtInstance, verifyToken)
url: domain/event?_id
request object: expects a json object of type { "event": object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
deleteEvent = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/event', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { _id: req.query._id };
                EventModel.remove(query, (err, dbObject) => {
                    if(err)
                    {
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "event": dbObject });
                    }
                });
            }
        });
    });
}

/*
method: getEventById(expressInstance)
url: domain/event?_id
response type: sends a json object of type { "event": object }. Else sends "Bad request"
*/
getEventById = function(expressInstance)
{
    expressInstance.get('/event', (req, res) => {
        EventModel.findOne({ _id: req.query._id }, (err, dbObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "event": dbObject });
            }
        });
    });
}

/*
method: getAllEvents(expressInstance)
url: domain/event/all-events
response type: sends a array of json objects of type { "event": object }[]. Else sends "Unauthorized"
*/
getAllEvents = function(expressInstance)
{
    expressInstance.get('/event/all-events', (req, res) => {
        EventModel.find({ }, (err, dbObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "event": dbObject });
            }
        });
    });
}

//CRUD operations at one place
exports.createRoutes = function(expressInstance, jwtInstance, verifyToken, multerInstance)
{
    addEvent(expressInstance, jwtInstance, verifyToken, multerInstance);
    updateEvent(expressInstance, jwtInstance, verifyToken);
    deleteEvent(expressInstance, jwtInstance, verifyToken);
    getEventById(expressInstance);
    getAllEvents(expressInstance);
}