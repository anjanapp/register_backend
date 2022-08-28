const mongoose=require('mongoose')


mongoose.connect('mongodb://localhost:27017/register',{
    useNewUrlParser:true
})

const Customer=mongoose.model('Customer',{
    uname:String,
    uid:Number,
    pswd:String
})


module.exports={
    Customer
}