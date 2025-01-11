const mongoose = require ('mongoose');

const connectDb = async() => {

mongoose.connect('mongodb://localhost:27017/dashboard-app')
  .then(() => {
    console.log('Connection to MongoDb is ok !');
  })
  .catch((err) => {
    console.error('Error hapened during MongoDb connection:', err);
  });
}
  
module.exports = connectDb;