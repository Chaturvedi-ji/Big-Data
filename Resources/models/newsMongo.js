const mongoose=require('mongoose')

const Scheme=mongoose.Schema({
    title:String,
    imgUrl:String
})

module.exports=mongoose.model('news2',Scheme)