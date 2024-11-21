const express = require ('express')
const User = require("../models/login.js")
const bcrypt = require ('bcrypt')

const router = express.Router();

// route POST pour la connexion utilisateur
router.post('/login', async function (req, res) {

    try{

        const { email, password } = req.body; 

        // Vérification de l'utilisateur dans la bdd
        const user = await User.findOne({ email });
        const isPasswordValid = await bcrypt.compare(password, user.password);
        console.log("Mdp :",isPasswordValid)
        console.log(user,"ici")

     
    if (!isPasswordValid && !user ) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

     // Si les identifiants sont valides
     res.status(200).json({message : 'Connexion reussie', Prénom : user.firstName});
    }

   
    catch (err) {
        res.status(500).json({ message: 'Email ou mot de passe incorrect', error: err.message });
      }
  });
  module.exports = router;