/*
@author: Emad Bin Abid, Mehdi Rajani
@date: July 03, 2018
*/

//Establishing the routes for event model

//Dependencies
const EventModel = require("./event.model").EventModel;
const { verifyToken } = require("../../authentication.mongoose");

/*
method: addEvent(expressInstance)
url: domain/event
request object: expects a json object of type { object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
addEvent = function(expressInstance) {
  expressInstance.post("/event", verifyToken, (req, res) => {
    var newEvent = new EventModel(req.body);
    newEvent.save((err, eventObject) => {
      if (err) {
        console.log(err);
        res.status(400).send("Bad request");
      } else {
        res.json({ event: eventObject });
      }
    });
  });
};

/*
method: updateEvent(expressInstance)
url: domain/event?_id
request object: expects a json object of type { "event": object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
updateEvent = function(expressInstance) {
  expressInstance.put("/event", verifyToken, (req, res) => {
    const query = { _id: req.body._id };
    const options = { new: true };
    EventModel.findOneAndUpdate(
      query,
      req.body,
      options,
      (err, eventObject) => {
        if (err) {
          res.status(400).send("Bad request");
        } else {
          res.json({ event: eventObject });
        }
      }
    );
  });
};

/*
method: deleteEvent(expressInstance)
url: domain/event?_id
request object: expects a json object of type { "event": object }
response type: sends a json object of type { "event": object }. Else sends "Unauthorized"
*/
deleteEvent = function(expressInstance) {
  expressInstance.delete("/event/:id", verifyToken, (req, res) => {
    const query = { _id: req.params.id };
    EventModel.remove(query, (err, eventObject) => {
      if (err) {
        res.status(400).send("Bad request");
      } else {
        res.json({ event: eventObject });
      }
    });
  });
};

/*
method: getEventById(expressInstance)
url: domain/event?_id
response type: sends a json object of type { "event": object }. Else sends "Bad request"
*/
getEventById = function(expressInstance) {
  expressInstance.get("/event", (req, res) => {
    EventModel.findOne({ _id: req.query._id }, (err, eventObject) => {
      if (err) {
        console.log(err);
        res.status(400).send("Bad request");
      } else {
        res.json({ event: eventObject });
      }
    });
  });
};

/*
method: getAllEvents(expressInstance)
url: domain/event/all-events?_id
response type: sends a array of json objects of type { "event": object }[]. Else sends "Unauthorized"
*/
getAllEventsByOranization = function(expressInstance) {
  expressInstance.get("/event/all-events", (req, res) => {
    EventModel.find({ organizationId: req.query._id }, (err, eventObject) => {
      if (err) {
        console.log(err);
        res.status(400).send("Bad request");
      } else {
        res.json({ events: eventObject });
      }
    });
  });
};

//CRUD operations at one place
exports.createRoutes = function(expressInstance) {
  addEvent(expressInstance);
  updateEvent(expressInstance);
  deleteEvent(expressInstance);
  getEventById(expressInstance);
  getAllEventsByOranization(expressInstance);
};
