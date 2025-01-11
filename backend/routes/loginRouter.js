const express = require('express');
const User = require("../models/login.js");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const router = express.Router();
const authenticate = require('../middlewares/auth');

router.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;
    console.log("Email :", email);

    // user verification in database
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "can't find user" });
    }
    console.log("user found :", user);

    // password verification
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("password validation :", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'incorrect password' });
    }
// generate a JWT token
  const token = jwt.sign(
  { userId: user._id, email: user.email },
  'JWT_SECRET', // secret key
  { expiresIn: '24h' } // token is expired after 1 hour
);
    // if all is ok
    res.status(200).json({token,firstName: user.firstName, });

    console.log("you now logged :", token, user.firstName);

  } catch (err) {
    console.error("error during the login :", err.message);
    res.status(500).json({ message: 'Server Error', error: err.message });
  }
});

module.exports = router;