const todoschema = require('../Model/todoModel')



exports.createtodo = async (req,res)=>{
     let item = req.body.item;

     try {
        let data = await todoschema.create({item})
        res.json({ msg: 'registered successfully ',  data })
     } catch (error) {
        res.json({ msg: 'data not save ', error: error.massage })
     }
}


exports.gettodo = async (req,res)=>{
try {
    let data = await todoschema.find()
    res.json({msg: 'view sussessfully' , data})
} catch (error) {
    res.json({msg: 'view has not done ', error : error.massage})
}
}

exports.deletetodo = async (req,res)=>{
    let id = req.params._id
    try {
        let data = await todoschema.findByIdAndDelete(id);
        return res.json({mas: 'delete sussessfully', data})
    } catch (error) {
        return res.json({mas: 'error in deleting user' , })
    }
}




exports.updatetodo = async (req, res) => {
    let id = req.params.id
    let newItem = req.body
    try {
        await todoschema.findByIdAndUpdate({ _id: id }, newItem,)
        return res.send({ msg: 'update succesfully', success: true, data })
    } catch (error) {
        return res.json({ msg: "Error |", success: false })
    }
}
