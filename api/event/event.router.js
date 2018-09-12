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
                // newEvent.eventImage.data = fs.readFileSync(req.file.path).type;
                newEvent.eventImage.fileInfo = req.file;
                newEvent.save( (err, eventObject) => {
                    if(err)
                    {
                        console.log(err);
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "event": eventObject });
                    }
                });
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
                const query = { _id: req.body._id };
                const options = { new: true };

                EventModel.findOneAndUpdate(query, req.body, options, (err, eventObject) => {
                    if (err) 
                    {
                        res.status(400).send("Bad request");
                    }
                    else 
                    {
                        res.json({ "event": eventObject });
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
    expressInstance.delete('/event/:id', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { _id: req.params.id };
                EventModel.remove(query, (err, eventObject) => {
                    if(err)
                    {
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "event": eventObject });
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
        EventModel.findOne({ _id: req.query._id }, (err, eventObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "event": eventObject });
            }
        });
    });
}

/*
method: getAllEvents(expressInstance)
url: domain/event/all-events?_id
response type: sends a array of json objects of type { "event": object }[]. Else sends "Unauthorized"
*/
getAllEventsByOranization = function(expressInstance)
{
    expressInstance.get('/event/all-events', (req, res) => {
        EventModel.find({ organizationId : req.query._id}, (err, eventObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "event": eventObject });
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
    getAllEventsByOranization(expressInstance);
}