const Depo = require('./model');
const Student = require('../student/model');

const deposit=(data,res) => {
    const {amount,notes} = data.body;
    const newDeposit = new Depo({
        amount,notes
       });

    Student.findById(data.query.id).then(()=>{
        newDeposit.studId=data.query.id;
        newDeposit.save().then(doc=>{
         Student.findOneAndUpdate({_id:data.query.id},{$inc:{balance:+data.body.amount}}).then((doc)=>{
             res.status(200).send(doc);
         },err=>{
             res.send(err);
         })
    });
    })
      
}

   module.exports = {
       deposit
   }