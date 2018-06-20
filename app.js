const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/StudentData');
const app = express();
app.use(bodyparser.json());
require('./modules/user')(app);
require('./modules/expensis')(app);
require('./modules/deposit')(app);
require('./modules/student')(app);

app.listen(3000, ()=>{
    console.log('server is up and runnig on port 3000');
});