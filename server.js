/*
@author: Emad Bin Abid
@date: July 03, 2018
*/

//Creating the express server

exports.run = function(expressInstance, port) {
  //If passed 'port' is busy, listens on dynamically assigned port.
  expressInstance.listen(port || process.env.PORT, err => {
    if (err) {
      console.log("[-]: Error in establishing server connection.");
    } else {
      console.log(`[+]: Express server listening on port ${port}...`);
    }
  });
};
