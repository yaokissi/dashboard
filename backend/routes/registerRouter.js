const express = require ('express')
const User = require("../models/register.js")
const bcrypt = require ('bcrypt')

const router = express.Router();

router.post('/register', async function (req, res) {
  /*  console.log('Headers:', req.headers); 
    console.log('Request body:', req.body); */
    try{
        const { firstName, lastName, email, password } = req.body;
        
        // hashage du mot de passe 
        const hashedPassword = await bcrypt.hash(password, 10);

        const new_user = new User({ 
            firstName, 
            lastName, 
            email, 
            password: hashedPassword 
        });
        await new_user.save();
        
        res.status(201).json({ message: 'user created' });
    }
    catch (err) {
        res.status(400).json({ message: err.message });
      }
  });
  module.exports = router;