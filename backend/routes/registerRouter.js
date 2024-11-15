const express = require ('express')
const User = require("../models/register.js")

const router = express.Router();

router.post('/register', async function (req, res) {
    console.log('Headers:', req.headers);
    console.log('Request body:', req.body);
    try{
        const { firstName, lastName, email, password } = req.body;
        
        const user = new User({ firstName, lastName, email, password });
        await user.save();
        res.status(201).json({ message: 'Utilisateur créé avec succès' });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
      }
  });
  module.exports = router;