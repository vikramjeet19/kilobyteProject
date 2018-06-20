const controller = require('./controller');

module.exports = (app)=> {
app.post('/stud',(req,res)=>{
 console.log(req.body);
controller.stud(req.body,res);
});
}