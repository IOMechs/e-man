/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Establishing the routes for user model

//Dependencies
const config = require('../../config');
const userModel = require('./user.model');

const UserModel = userModel.UserModel;

/*
method: addUser(expressInstance)
url: domain/user
response type: sends a json object of type { "user": object } if it doesn't exist already. Else sends "Unauthorized"
*/
addUser = function(expressInstance)
{
    expressInstance.post('/user', (req, res) => {

        //Checking User already exists.
        UserModel.findOne( { "username": req.body.username },  (err, userObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad request");
            }
            else
            {
                if(userObject === null)
                {
                    //Adding User if it doesn't exist.
                    UserModel.create(req.body.user, (err, userObject) => 
                    {
                        if(err)
                        {
                            res.status(400).send("Bad request");
                        }
                        else
                        {
                            res.json( { "user": userObject } );
                        }
                    });
                }
                else
                {
                    res.status(401).send("Unauthorized");
                }
            }
        });
    });
}

/*
method: updateUser(expressInstance)
url: domain/user
request type: expects a json object of type { "user": object }
response type: sends a json object of type { "user": object } if it exists. Else sends { "user": null }
*/
updateUser = function (expressInstance, jwtInstance, verifyToken) 
{
    expressInstance.put('/user', verifyToken, (req, res) => 
    {
        jwtInstance.verify(req.token, config.jwt_key, (err, userData) => {
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                const query = { username: userData.user.username };
                const options = { new: true };

                UserModel.findOneAndUpdate(query, req.body.user, options, (err, userObject) => {
                    if(err)
                    {
                        res.status(400).send("Bad request");
                    }
                    else
                    {
                        res.json({ "user": userObject });
                    }
                });
            }
        });
    });
}

//deleteUser
deleteUser = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/user', (req, res) => {
        //Needs implementation
    });
}

/*
method: getUser(expressInstance)
url: domain/user?username
response type: sends a json object of type { "user": object } if it exists. Else sends { "user": null }
*/
getUser = function(expressInstance)
{
    expressInstance.get('/user', (req, res) => {
        UserModel.findOne( { "username": req.query.username },  (err, userObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad request");
            }
            else
            {
                res.json( { "user": userObject } );
            }
        });
    });
}

/*
method: getAllUsers(expressInstance)
url: domain/user/all-users
response type: sends an array of objects of type { "user": object }[] if it exists. Else sends "Bad Request"
*/
getAllUsers = function(expressInstance)
{
    expressInstance.get('/user/all-users', (req, res) => {
        UserModel.find( (err, userObject) => 
        {
            if(err)
            {
                res.status(400).send("Bad Request");
            }
            else
            {
                res.json( { "user": userObject } );
            }
        });
    });
}

//CRUD operations at one place
exports.createRoutes = function(expressInstance, jwtInstance, verifyToken)
{
    addUser(expressInstance);
    updateUser(expressInstance, jwtInstance, verifyToken);
    deleteUser(expressInstance, jwtInstance, verifyToken);
    getUser(expressInstance);
    getAllUsers(expressInstance);
}