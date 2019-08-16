/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Establishing the routes for Organization model

//Dependencies
const config = require("../../config");
const OrganizationModel = require("./organization.model").OrganizationModel;
const { verifyToken } = require('../../authentication.mongoose');
/*
method: addOrganization(expressInstance)
url: domain/Organization
request object: expects a json object of type { object }
response type: sends a json object of type { "organization": object }. Else sends "Unauthorized"
*/
addOrganization = function(
  expressInstance
) {
  expressInstance.post("/organization", verifyToken, (req, res) => {
    var newOrganization = new OrganizationModel({
      ...req.body,
      userId: req.user._id
    });
    newOrganization.save((err, organizationObject) => {
      if (err) {
        res.status(400).send("Bad request");
      } else {
        res.json({ organization: organizationObject });
      }
    });
  });
};

/*
method: updateOrganization(expressInstance)
url: domain/Organization?_id
request object: expects a json object of type { "Organization": object }
response type: sends a json object of type { "Organization": object }. Else sends "Unauthorized"
*/
updateOrganization = function(expressInstance) {
  expressInstance.put("/organization", verifyToken, (req, res) => {
    const query = { _id: req.body._id };
    const options = { new: true };
    OrganizationModel.findOneAndUpdate(
      query,
      req.body,
      options,
      (err, organizationObject) => {
        if (err) {
          res.status(400).send("Bad request");
        } else {
          res.json({ organization: organizationObject });
        }
      }
    );
  });
};

/*
method: deleteOrganization(expressInstance)
url: domain/Organization?_id
request object: expects a json object of type { "Organization": object }
response type: sends a json object of type { "Organization": object }. Else sends "Unauthorized"
*/
deleteOrganization = function(expressInstance) {
  expressInstance.delete("/organization/:id", verifyToken, (req, res) => {
    const query = { _id: req.params.id };
    OrganizationModel.remove(query, (err, organizationObject) => {
      if (err) {
        res.status(400).send("Bad request");
      } else {
        res.json({ organization: organizationObject });
      }
    });
  });
};

/*
method: getOrganizationById(expressInstance)
url: domain/Organization?_id
response type: sends a json object of type { "Organization": object }. Else sends "Bad request"
*/
getOrganizationById = function(expressInstance) {
  expressInstance.get("/organization", (req, res) => {
    OrganizationModel.findOne(
      { _id: req.query._id },
      (err, organizationObject) => {
        if (err) {
          console.log(err);
          res.status(400).send("Bad request");
        } else {
          res.json({ organization: organizationObject });
        }
      }
    );
  });
};

/*
method: getAllOrganizations(expressInstance)
url: domain/Organization/all-Organizations?_id
response type: sends a array of json objects of type { "Organization": object }[]. Else sends "Unauthorized"
*/
getOrganizationsByUserId = function(expressInstance) {
  expressInstance.get("/organizations", (req, res) => {
    OrganizationModel.find(
      { userId: req.query.userId },
      (err, organizationObject) => {
        if (err) {
          console.log(err);
          res.status(400).send("Bad request");
        } else {
          res.json({ organizations: organizationObject });
        }
      }
    );
  });
};

//CRUD operations at one place
exports.createRoutes = function(expressInstance) {
  addOrganization(expressInstance);
  updateOrganization(expressInstance);
  deleteOrganization(expressInstance);
  getOrganizationById(expressInstance);
  getOrganizationsByUserId(expressInstance);
};
