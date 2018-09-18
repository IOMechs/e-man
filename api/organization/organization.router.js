/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Establishing the routes for Organization model

//Dependencies
const config = require('../../config');
const fs = require('fs');
const organizationModel = require('./organization.model');

const OrganizationModel = organizationModel.OrganizationModel;

/*
method: addOrganization(expressInstance, jwtInstance, verifyToken)
url: domain/Organization
request object: expects a json object of type { object }
response type: sends a json object of type { "organization": object }. Else sends "Unauthorized"
*/
addOrganization = function(expressInstance, jwtInstance, verifyToken, multerInstance)
{
    expressInstance.post('/organization', verifyToken,(req, res) => {
        var newOrganization = new OrganizationModel(req.body);
        // newOrganization.organizationImage.data = fs.readFileSync(req.file.path).type;
        newOrganization.organizationImage.fileInfo = req.file;
        newOrganization.save( (err, organizationObject) => {
            if(err)
            {
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "organization": organizationObject });
            }
        });
        // jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            // if(err)
            // {
            //     res.status(401).send("Unauthorized");
            // }
            // else
            // {
            //     var newOrganization = new OrganizationModel(req.body);
                // newOrganization.organizationImage.data = fs.readFileSync(req.file.path).type;
            //     newOrganization.organizationImage.fileInfo = req.file;
            //     newOrganization.save( (err, organizationObject) => {
            //         if(err)
            //         {
            //             res.status(400).send("Bad request");
            //         }
            //         else
            //         {
            //             res.json({ "organization": organizationObject });
            //         }
            //     });
            // }
        });
   // });
}

/*
method: updateOrganization(expressInstance, jwtInstance, verifyToken)
url: domain/Organization?_id
request object: expects a json object of type { "Organization": object }
response type: sends a json object of type { "Organization": object }. Else sends "Unauthorized"
*/
updateOrganization = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.put('/organization', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { _id: req.body._id };
                const options = { new: true };
                OrganizationModel.findOneAndUpdate(query, req.body, options, (err, organizationObject) => {
                    if (err) 
                    {
                        res.status(400).send("Bad request");
                    }
                    else 
                    {
                        res.json({ "organization": organizationObject });
                    }
                });
            }
        });
    });
}

/*
method: deleteOrganization(expressInstance, jwtInstance, verifyToken)
url: domain/Organization?_id
request object: expects a json object of type { "Organization": object }
response type: sends a json object of type { "Organization": object }. Else sends "Unauthorized"
*/
deleteOrganization = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/organization/:id', verifyToken, (req, res) => {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { _id: req.params.id };
                OrganizationModel.remove(query, (err, organizationObject) => {
                    if(err)
                    {
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "organization": organizationObject });
                    }
                });
            }
        });
    });
}

/*
method: getOrganizationById(expressInstance)
url: domain/Organization?_id
response type: sends a json object of type { "Organization": object }. Else sends "Bad request"
*/
getOrganizationById = function(expressInstance)
{
    expressInstance.get('/organization', (req, res) => {
        OrganizationModel.findOne({ _id: req.query._id }, (err, organizationObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "organization": organizationObject });
            }
        });
    });
}

/*
method: getAllOrganizations(expressInstance)
url: domain/Organization/all-Organizations?_id
response type: sends a array of json objects of type { "Organization": object }[]. Else sends "Unauthorized"
*/
getOrganizationsByUserId = function(expressInstance)
{
    expressInstance.get('/organizations', (req, res) => {
        OrganizationModel.find({userId : req.query._id }, (err, organizationObject) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "organization": organizationObject });
            }
        });
    });
}

//CRUD operations at one place
exports.createRoutes = function(expressInstance, jwtInstance, verifyToken)
{
    addOrganization(expressInstance, jwtInstance, verifyToken);
    updateOrganization(expressInstance, jwtInstance, verifyToken);
    deleteOrganization(expressInstance, jwtInstance, verifyToken);
    getOrganizationById(expressInstance);
    getOrganizationsByUserId(expressInstance);
}