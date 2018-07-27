/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Dependencies
const config = require('./config');
const userModel = require('./models/user-model/user.model');

const UserModel = userModel.UserModel;

//Validating User on /login request.
/*
method: validateUser(expressInstance, jwtInstance, userRouterInstance)
url: domain/login
request object: expects a json object of type { "user": object }
response object: sends a json object of type { "user": object, "token": token }. If error, then sends "Unauthorized"
*/
exports.validateUser = function(expressInstance, jwtInstance)
{
    //Validating User
    expressInstance.post('/login', (req, res) => 
    {
        UserModel.findOne(req.body.user, (err, userObject) => 
        {
            if(err)
            {
                res.status(401).send('Unauthorized');
            }
            else
            {
                if(userObject === null)
                {
                    res.status(401).send('Unauthorized');
                }
                else
                {
                    const signObject = { "user": userObject };
                    jwtInstance.sign(signObject, config.jwt_key, (err, token) => 
                    {
                        const user = userObject.toJSON();
                        delete user.password
                        const signObject = { "user": user };
                        jwtInstance.sign(signObject, config.jwt_key, (err, token) => {
                            if(err)
                            {
                                res.status(401).send('Unauthorized');
                            }
                            else
                            {
                                res.json({ "user": user, "token": token });
                            }
                        });
                    });
                }
            }
        });
    });
}

//Verifying the token
exports.verifyToken = function(req, res, next)
{
    const authHeader = req.headers['authorization'];
    //authHeader is a string containing token under the Authorization Header sent by the client.

    if(typeof authHeader !== 'undefined')
    {
        req.token = authHeader;
        next();
    }
    else
    {
        res.status(401).send('Unauthorized');
    }
}