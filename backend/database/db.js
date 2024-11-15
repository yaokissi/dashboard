const mongoose = require ('mongoose');

const connectDb = async() => {

mongoose.connect('mongodb://localhost:27017/dashboard-app')
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB:', err);
  });
}
  
module.exports = connectDb;