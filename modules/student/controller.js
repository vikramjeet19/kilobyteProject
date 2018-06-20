const Student = require('./model');

const stud =(data,res) => {
    const {name ,email, password,age ,phoneNumber,add} = data;
    const newUser = new Student({
        name,email,password,age,phoneNumber,add
       })
       newUser.save().then(doc=>{
           
           res.send(doc);
       },e=>{
           res.send(e)
       })
   };

   module.exports = {
       stud
   }