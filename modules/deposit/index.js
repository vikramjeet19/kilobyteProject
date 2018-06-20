const controller = require('./controller');
module.exports = (app)=> {

app.post('/deposit',(req,res)=>{
 console.log(req.body);
controller.deposit(req,res);
});


// app.post('/deposit/depo', (req,res)=>{
//     Student.findOneAndUpdate({_id:req.query.id},{balance:req.body.balance}).then((doc)=>{
//         res.status(200).send(doc);
//     },err=>{
//         res.send(err);
//     })
// })

}