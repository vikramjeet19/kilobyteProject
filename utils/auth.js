const jwt = require('jsonwebtoken');
const generateToken = payload=>{
return jwt.sign(payload,'vickySingh');
};
const findByToken = token => jwt.verify(token,'ab123');
module.exports ={ generateToken, findByToken};


