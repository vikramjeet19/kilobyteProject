const User = require('../modules/user/model');
const {findByToken} = require('../utils/auth'); 
const Auth = (req,res,next) => {
    const token = req.header('U-auth');

const {id} = findByToken(token);
try {
    const user = User.findById(id);
      if(user) {
          req.user=user;
         return next();
      }
      return res.status(403).send("Forbidden");
} catch (error) {
    res.send("Internal Server Error");
}
}
module.exports = {Auth};