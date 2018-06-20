const mongoose = require('mongoose');
const {Schema} = mongoose;
const Student = require('../student/model');

const expend = new Schema ({
  category:{
      type:String,
      require : true,
      enum:["Medical","laundry","shopping"]
    },
  amount : {
      type: Number,
    require: true,
    min:100
    },
 detail : {
        type:String,
        require: true
    },
    createdAt:
    {
      type : Date,
      default:new Date()
    },
    expStudentId:{
      type:Schema.Types.ObjectId,
      ref:'Student',
      require:true
    }
});

module.exports = mongoose.model('expenditure',expend);