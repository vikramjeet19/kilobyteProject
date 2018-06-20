const mongoose = require('mongoose');
const validator = require('validator');
const {Schema} = mongoose;


const address = new Schema({
    street: {
        type: String,
        require : true
    },
    city:{
        type:String,
        require: true,
        minlength:3
    },
    pinCode : {
        type: Number,
        require : true,
        trim: true
    }
});

const student = new Schema({
    name : {
        type : String,
        require : true,
        trim : true,
        minlength : 3
    },
    email:{
        type : String,
        require : true,
        unique : true,
        trim : true,
        minlength:2,
        validator :{
            validator : validator.isEmail,
            message : 'Not valid email'
        } 
    },
    password : {
        require : true,
        type : String
    },
    age:{
        type : Number,
        require : true,
    },
    phoneNumber:{
        type : Number,
        maxlength : 12,
        minlength  : 10,
        require : true,
    },
    add:{
        type: address,
        require: true
    },
    balance: {
        type: Number,
       default:0
    },
    depositor:{
        type:Schema.Types.ObjectId,
        ref : 'deposit'
    }
});

module.exports = mongoose.model('Student', student);