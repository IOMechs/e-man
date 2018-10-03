/*
@author: Muhammad Mehdi
@date: October 02, 2018
*/

//Establishing the routes for image model

//Dependencies
const imageModel = require('./image.model');

const ImageModel = imageModel.ImageModel;

/*
method: addImage(expressInstance)
url: domain/image.new
request object: expects a json object of type { object }
response type: sends a json object of type { "image": object }. 
*/
addImage = function(expressInstance)
{
    expressInstance.post('/image/new', (req, res) => {
        let image =  req.body;
        ImageModel.create(image, function(err , image){
            if(err)
            {
                res.status(401).send("Unauthorized");
            }
            else
            {
                
                res.json({ "image": image });
                    
            }
        });

    });
}

/*
method: updateImage(expressInstance, jwtInstance, verifyToken)
url: domain/event/edit/id
request object: expects a json object of type { "event": object }
response type: sends a json object of type { "event": object }.
*/
updateImage = function(expressInstance)
{
    expressInstance.put('/image/edit/:id', (req, res) => {
        const query = { _id: req.params.id };
        const options = { new: true };

        ImageModel.findOneAndUpdate(query, req.body, options, (err, image) => {
            if (err) 
            {
                res.status(400).send("Bad request");
            }
            else 
            {
                res.json({ "image": image });
            }
        });
    });
}

/*
method: deleteImage(expressInstance)
url: domain/image/delete/id
request object: expects a json object of type { "image": object }
response type: sends a json object of type { "image": object }.
*/
deleteImage = function(expressInstance, jwtInstance, verifyToken)
{
    expressInstance.delete('/event/delete/:id', (req, res) => {
        const query = { _id: req.params.id };
        EventModel.remove(query, (err, image) => {
            if(err)
            {
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "image": image });
            }
        });
    });
}


/*
method: getAllImages(expressInstance)
url: domain/images/all/id
response type: sends a array of json objects of type { "event": object }[]. Else sends "Unauthorized"
*/
getAllImages = function(expressInstance)
{
    expressInstance.get('/images/all/:id', (req, res) => {
        ImageModel.find({ entityId : req.params.id}, (err, images) => {
            if(err)
            {
                console.log(err);
                res.status(400).send("Bad request");
            }
            else
            {
                res.json({ "images": images });
            }
        });
    });
}

//CRUD operations at one place
exports.createRoutes = function(expressInstance)
{
    addImage(expressInstance);
    updateImage(expressInstance);
    deleteImage(expressInstance);
    getAllImages(expressInstance);
}