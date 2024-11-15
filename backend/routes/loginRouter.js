const express = require ('express')
const User = require("../models/register.js")

const router = express.Router();

// route POST pour la connexion utilisateur
router.post('/login', async function (req, res) {

    console.log('Headers:', req.headers);
    console.log('Request body:', req.body);

    try{
        const { email, password } = req.body; // Récupération des données de connexion
        
        // Vérification de l'utilisateur dans la bdd
        const user = await User.findOne({ email });
        
        // Si l'utilisateur n'existe pas / mdp incorrecte 
        if (!user || user.password !== password)
        return res.status(401).json({ message: 'Email ou mot de passe incorrect' });

         // Comparaison des mots de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Email ou mot de passe incorrect' });
    }

     // Si les identifiants sont valides
     res.status(200).json({message : 'Connexion reussie', Prénom : user.firstName});
    }

   
    catch (err) {
        res.status(500).json({ message: 'Erreur serveur', error: err.message });
      }
  });
  module.exports = router;