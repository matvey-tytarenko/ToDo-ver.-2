import React from 'react'
import '../styles/Todo.scss'
import { ToastContainer, toast } from 'react-toastify';

function ToDoComponent({text, updateMode, deleteToDo}) {

  const handleChange = () => {

  }

  return (
    <>
      <div className="todo">
        <div className="text">{text}</div>
        <div className="icons">
          <i className="fas fa-pen-to-square pen" onClick={updateMode}></i>
          <i className="fas fa-trash-can trash" onClick={deleteToDo}></i>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ToDoComponent