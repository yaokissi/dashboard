import authenticate from "../middlewares/auth";
import {router} from "express/lib/application";

router.get('/profile', authenticate, async (req, res) => {
    try {


        const user = await User.findById(req.user.userId).select('-password');

        if (!user) {
            return res.status(404).json({ message: 'Utilisateur non trouvé' });
        }

        res.json({
            firstName: user.firstName,
            email: user.email
        });
    } catch (error) {
        res.status(500).json({ message: 'Erreur serveur' });
    }
});

module.exports = router;
