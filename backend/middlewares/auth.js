const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    console.log('Headers reçus :', req.headers); // Debug
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'access refused, token missing' });
    }
    try {
        const decoded = jwt.verify(token, 'JWT_SECRET');
        req.user = decoded;
        next();
    } catch (err) {
        res.status(403).json({ message: 'invalid or expired Token ' });
    }
};

module.exports = authenticate;