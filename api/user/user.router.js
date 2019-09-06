/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Establishing the routes for user model

//Dependencies
const config = require("../../config");
const UserModel = require("./user.model").UserModel;
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../../authentication.mongoose");

/*
method: addUser(expressInstance)
url: domain/user
response type: sends a json object of type { "user": object } if it doesn't exist already. Else sends "Unauthorized"
*/
addUser = function(expressInstance) {
  expressInstance.post("/signup", (req, res) => {
    //Checking User already exists.
    UserModel.findOne({ email: req.body.email }, (err, userObject) => {
      if (err) {
        res.status(400).send({ error: err, message: "Bad request" });
      } else if (userObject) {
        res.status(400).send({ error: true, message: "User already exist" });
      } else {
        if (userObject === null) {
          //Adding User if it doesn't exist.
          UserModel.create(req.body, (err, userObject) => {
            if (err) {
              res.status(400).send({ error: err, message: "Bad request" });
            } else {
              const user = userObject.toJSON();
              delete user.password;
              const signObject = { user: user };
              jwt.sign(signObject, config.jwt_key, (err, token) => {
                if (err) {
                  res.status(400).send({ error: err, message: "Unauthorized" });
                } else {
                  res.json({ success: true, user: user, token: token });
                }
              });
            }
          });
        } else {
          res.status(401).send("Unauthorized");
        }
      }
    });
  });
};

/*
method: updateUser(expressInstance)
url: domain/user
request type: expects a json object of type { "user": object }
response type: sends a json object of type { "user": object } if it exists. Else sends { "user": null }
*/
updateUser = function(expressInstance) {
  expressInstance.put("/user", verifyToken, (req, res) => {
    const userData = req.user;
    const query = { username: userData.firstName };
    const options = { new: true };

    UserModel.findOneAndUpdate(query, req.body, options, (err, userObject) => {
      if (err) {
        res.status(400).send({ error: err, message: "Bad request" });
      } else {
        if (userObject) {
          res.json({ success: true, user: userObject });
        } else {
          res.json({ error: true, message: "No user found" });
        }
      }
    });
  });
};

//deleteUser
deleteUser = function(expressInstance) {
  expressInstance.delete("/user", (req, res) => {
    //Needs implementation
  });
};

/*
method: getUser(expressInstance)
url: domain/user?username
response type: sends a json object of type { "user": object } if it exists. Else sends { "user": null }
*/
getUser = function(expressInstance) {
  expressInstance.post("/login", (req, res) => {
    UserModel.findOne({ email: req.body.email }, (err, userObject) => {
      if (err) {
        res.status(400).send("Bad request");
      } else if (userObject) {
        const user = userObject.toJSON();
        if (req.body.password === user.password) {
          delete user.password;
          const signObject = { user: user };
          jwt.sign(signObject, config.jwt_key, (err, token) => {
            if (err) {
              res.status(400).send({ error: err, message: "Unauthorized" });
            } else {
              res.json({ success: true, user: user, token: token });
            }
          });
        } else {
          res.status(400).send({ error: true, message: "Invalid password" });
        }
      } else {
        res.status(400).json({ error: true, message: "User not found" });
      }
    });
  });
};

/*
method: getAllUsers(expressInstance)
url: domain/user/all-users
response type: sends an array of objects of type { "user": object }[] if it exists. Else sends "Bad Request"
*/
getAllUsers = function(expressInstance) {
  expressInstance.get("/user/all-users", (req, res) => {
    UserModel.find((err, userObject) => {
      if (err) {
        res.status(400).send("Bad request");
      } else {
        res.json({ user: userObject });
      }
    });
  });
};

//CRUD operations at one place
exports.createRoutes = function(expressInstance) {
  addUser(expressInstance);
  updateUser(expressInstance);
  deleteUser(expressInstance);
  getUser(expressInstance);
  getAllUsers(expressInstance);
};
