const User = require('./model');
const {generateToken} = require('../../utils/auth');

const signup =(data,res) => {
    const {name ,email, password,age,phoneNumber,add} = data;
    const newUser = new User({
        name,email,password,age,phoneNumber,add
       })
       newUser.save().then(doc=>{
           const payload = ({id:doc._id, date : new Date()});
           const token = generateToken(payload);
           res.header('U-auth', token).status(200).send(doc);
       },e=>{
           res.send(e)
       })
   };

   module.exports = {
       signup
   }