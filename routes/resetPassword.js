const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { User } = require('../db.js');

const SECRET_KEY = 'secretkey23456';
const TOKEN_EXPIRATION = '1h';

// // Route pour demander la réinitialisation du mot de passe
// router.post('/forgot-password', async (req, res) => {
//     try {
//         const existingUser = await User.findOne({
//             where: {
//                 email: req.body.email,
//             },
//         });

//         if (!existingUser) {
//             return res.status(400).json({ message: 'Email inexistant' });
//         }

//         // Génération du token de réinitialisation
//         const resetToken = generateResetToken(existingUser);

//         // Envoyez le token à l'utilisateur (par exemple, par email)
//         // Vous devrez implémenter la logique d'envoi de l'email dans votre application

//         res.json({ message: 'Un email de réinitialisation a été envoyé avec succès.' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erreur interne du serveur' });
//     }
// });

// // Route pour réinitialiser le mot de passe
// router.post('/reset-password', async (req, res) => {
//     try {
//         const { token, newPassword } = req.body;

//         // Vérifier si le token est valide et n'a pas expiré
//         jwt.verify(token, SECRET_KEY, async (err, decoded) => {
//             if (err) {
//                 return res.status(400).json({ message: 'Token invalide ou expiré' });
//             }

//             // Le token est valide, vous pouvez accéder aux informations décodées
//             const userId = decoded.userId;

//             // Recherchez l'utilisateur dans la base de données par son ID
//             const user = await User.findByPk(userId);

//             if (!user) {
//                 return res.status(404).json({ message: 'Utilisateur non trouvé' });
//             }

//             // Mettez à jour le mot de passe de l'utilisateur avec le nouveau mot de passe
//             user.password = await bcrypt.hash(newPassword, 10);

//             // Enregistrez les modifications dans la base de données
//             await user.save();

//             // Réinitialisez le token en générant un nouveau token avec une nouvelle expiration
//             const newToken = jwt.sign({ userId: user.id }, SECRET_KEY, {
//                 expiresIn: TOKEN_EXPIRATION,
//             });

//             // Envoyez le nouveau token à l'utilisateur (par exemple, par email)
//             // Vous devrez implémenter la logique d'envoi de l'email dans votre application

//             res.json({ message: 'Le mot de passe a été réinitialisé avec succès.' });
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Erreur interne du serveur' });
//     }
// });

// // Fonction pour générer un token de réinitialisation
// const generateResetToken = (user) => {
//     const payload = {
//         userId: user.id,
//         // Ajoutez d'autres données à inclure dans le token si nécessaire
//     };

//     const options = {
//         expiresIn: TOKEN_EXPIRATION, // Spécifiez la durée de validité du token
//     };

//     return jwt.sign(payload, SECRET_KEY, options);
// };

// module.exports = router;

router.get("/forgot-pass", (req, res) => {
    res.render("reset")
})