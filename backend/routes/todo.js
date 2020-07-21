const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo')
const passport = require('passport')

const auth = passport.authenticate("jwt",{session:false})

router.get('/',auth,todoController.getTodo)
router.post('/',auth,todoController.addTodo)
router.delete('/:id',auth,todoController.deleteTodo)
router.put('/:id',auth,todoController.editTodo)

module.exports = router