const controller = require('./controller');
module.exports = (app)=> {
app.post('/user',(req,res)=>{
 console.log(req.body);
controller.signup(req.body,res);
});

}
