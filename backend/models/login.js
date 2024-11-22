
const mongoose = require ('mongoose')
const userSchema = new mongoose.Schema({
 
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  collection : 'registerusers',
  timestamps: true
});


const LoginUser = mongoose.models.LoginUser || mongoose.model('LoginUser', userSchema);

module.exports = LoginUser;
