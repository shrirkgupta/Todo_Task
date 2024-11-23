const express = require('express')
const { createtodo, gettodo, deletetodo, updatetodo } = require('../Controller/todoController')


const router = express.Router()

router.post('/createtodo' ,createtodo)
router.get('/gettodo',gettodo  )
router.delete('/deletetodo/:_id',deletetodo)
router.put('/updatetodo/:id',updatetodo)





module.exports=router