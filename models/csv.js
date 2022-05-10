var mongoose  =  require('mongoose');

var csvSchema = new mongoose.Schema({
    Id:{
        type:Number
    },
    Name:{
        type:String
    },
    Age:{
        type:Number
    },
    Marks1:{
        type:Number
    },
    Marks2:{
        type:Number
    },
    Marks3:{
        type:Number
    }
});

module.exports = mongoose.model("studentsrecords",csvSchema);