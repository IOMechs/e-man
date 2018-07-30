const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/e-man');
mongoose.connect('mongodb://e-man:eman123@ds159631.mlab.com:59631/e-man');

let db = mongoose.connection;

/**
 * @author Saad Qamar
 * @desc When there's an error connecting to database, this handler will trigger
 */
db.on('error', (err) => {
  console.error('connection error:', err);
});

/**
 * @author Saad Qamar
 * @desc When connection is properly established with the MongoDB, this handler
 * will trigger.
 */
db.once('open', () => {
  console.log('db connection established successfully');
});

module.exports = db;
