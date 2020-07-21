const db = require('../models')

const addTodo = async(req,res) => {
    const {title} = req.body 
    const newTodo = await db.Todo.create({title,status:'incomplete',user_id:req.user.id})
    res.status(201).send(newTodo)
}
const getTodo = async(req,res) => {
    const todos = await db.Todo.findAll({where:{user_id:req.user.id}})
    res.status(200).send(todos)
}
const deleteTodo = async(req,res) => {
    const targetId = req.params.id
    const todos = await db.Todo.findOne({where:{id:targetId, user_id:req.user.id}})
    if(todos){
        todos.destroy()
        res.status(204).send({message:'Deleted Todo'})
    }else{
        res.status(400).send({messeage:'Cannot find what you are looking for'})
    }
}
const editTodo = async(req,res) => {
    const targetId = req.params.id
    const {title,status} = req.body
    const todo = await db.Todo.findOne({where:{id:targetId,user_id:req.user.id}})
    if(todo){
        await todo.update({title,status})
        res.status(204).send({message:'Todo updated'})
    }else{
        res.status(400).send({message:'Cannot find what you are looking for'})
    }
}

module.exports = {
    addTodo,getTodo,deleteTodo,editTodo
}