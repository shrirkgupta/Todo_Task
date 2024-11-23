let mongoose = require('mongoose')

let connection = ()=>{
    mongoose.connect('mongodb://localhost:27017/machine')
    .then(()=>
        console.log('database Connected')
       )
       .catch((err)=>console.log(err))
    }

    
module.exports=connection
