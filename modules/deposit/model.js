const mongoose = require('mongoose');
const {Schema} = mongoose;

const deposit = new Schema ({
    amount : {
      type: Number,
    require: true,
    min:100
    },
    notes:{
        type:String
    },
    createdAt :{
        type:Date,
        default: new Date()
    },
    studId:{
        type:Schema.Types.ObjectId,
        ref:'Student',
        required:true
    }
  
});

module.exports = mongoose.model('deposit',deposit);