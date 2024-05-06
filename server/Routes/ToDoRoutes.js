const ToDoRouter = require('express').Router();
const { getToDo, saveToDo, UpdateToDo, DeleteToDo } = require("../Controller/ToDoController")


ToDoRouter.get("/", getToDo);
ToDoRouter.post("/save", saveToDo)
ToDoRouter.post("/update", UpdateToDo)
ToDoRouter.post("/delete", DeleteToDo)

module.exports = ToDoRouter;