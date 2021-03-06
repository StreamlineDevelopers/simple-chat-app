const jwt = require('jsonwebtoken');

const jwtVerify = (req, res, next) =>{
    const token = req.header('jwt-token');

    if(!token) return res.status(401).send('Access Denied');

    try {
        // if token is equal to the env token, grants access and return the id of the user
        const verified = jwt.verify(token, process.env.JWT_TOKEN);

        req.user = verified;

        //once we have the auth token we can proceed through next
        next();
    } catch (error) {
        resizeBy.status(400).send('Invalid Token');
    }
} // A middleware that checks if the token is valid if not prevent access

module.exports = jwtVerify;