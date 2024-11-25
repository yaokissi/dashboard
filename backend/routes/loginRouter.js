const express = require('express');
const User = require("../models/login.js");
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/login', async function (req, res) {
  try {
    const { email, password } = req.body;

    console.log("Email :", email);

    // Vérification de l'utilisateur dans la base de données
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'can'/'t find user' });
    }

    console.log("Utilisateur trouvé :", user);

    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log("Validation du mot de passe :", isPasswordValid);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Mot de passe incorrect' });
    }

    // Si tout est valide
    res.status(200).json({ message: 'Connexion réussie', Prénom: user.firstName });
  } catch (err) {
    console.error("Erreur lors de la connexion :", err.message);
    res.status(500).json({ message: 'Erreur interne du serveur', error: err.message });
  }
});

module.exports = router;
