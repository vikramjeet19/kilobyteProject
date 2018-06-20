const controller = require('./controller');
const {Auth} = require('../../middleware/middleware');


module.exports = (app)=> {
app.post('/expensis',(req,res)=>{
 console.log(req.body);
controller.data(req,res);
});

}
