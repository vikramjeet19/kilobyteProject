const Expenditure = require('./model');
const Student = require('../student/model');

const data =(data,res) => {
    const {category,amount,detail} = data.body;
    const newExp = new Expenditure({
        category,amount,detail
       });   

       Student.findById(data.query.id).then(()=>{
        newExp.expStudentId = data.query.id;
        newExp.save().then(doc=>{
 
         Student.findOneAndUpdate({_id:data.query.id},
             {$inc:{balance:-data.body.amount}})
         .then((doc)=>{
             res.status(200).send(doc);
         },err=>{
             res.send(err);
         });
       }); 
       },(err)=>{
        res.status(400).send();
       })
       
   };

   module.exports = {
       data
   }