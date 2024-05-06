import React, { useState, useEffect } from "react";
import "../styles/Todo.scss";
import ToDoComponent from "../components/ToDoComponent";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Header from "../components/Header";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "../utils/API";

function ToDo() {
  const [ToDo, SetToDo] = useState([]);
  const [text, SetText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [ToDoId, SetToDoId] = useState("");

  useEffect(() => {
    handleGet(SetToDo);
  }, []);

  const UpdateMode = (_id, text) => {
    setIsUpdating(true);
    SetText(text);
    SetToDoId(_id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleValidation();
  };

  const handleValidation = () => {
    if(text != "") {
      toast.error("Field is reqire!", ToastOpt);
      return false;
    } else {
      return true;
    }
  }

  const ToastOpt = {
    position: "bottom-right",
    autoClose: 5000,
    pauseOnHover: true,
    draggable: true,
    theme: "colored",
  };

  const handleGet = (setToDo) => {
    axios
      .get(getAllToDo)
      .then(({ data }) => {
        console.log(`data ----> ${data}`);
        setToDo(data);
      })
      .catch((err) => console.error(`Get Data Error: ${err}`));
  };

  const handleAdd = (text, SetText, SetToDo) => {
    axios
      .post(addToDo, { text })
      .then((data) => {
        console.log(data);
        SetText("");
        handleGet(SetToDo);
      })
      .catch((err) => console.error(`Add Error: ${err}`));
  };

  const handleUpdate = (ToDo_id, text, setToDo, SetText, SetIsUpdating) => {
    axios
      .post(updateToDo, { _id: ToDo_id, text })
      .then((data) => {
        console.log(data);
        SetText("");
        SetIsUpdating(false);
        getAllToDo(setToDo);
      })
      .catch((err) => console.error(`Update Error: ${err}`));
  };

  const handleDelete = (_id, SetToDo) => {
    axios
      .post(deleteToDo, { _id })
      .then((data) => {
        handleGet(SetToDo);
        console.log(data);
      })
      .catch((err) => console.error(`Delete Error: ${err}`));
  };

  return (
    <>
      <div className="container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="logo">
            <h1>ToDo</h1>
          </div>

          <div className="top">
            <input
              type="text"
              placeholder="Add ToDo..."
              value={text}
              onChange={(e) => SetText(e.target.value)}
            />

            <div
              className="add"
              onClick={
                isUpdating
                  ? () =>
                      handleUpdate(
                        ToDoId,
                        text,
                        SetToDo,
                        SetText,
                        setIsUpdating
                      )
                  : () => handleAdd(text, SetText, SetToDo)
              }
            >
              {isUpdating ? "Update" : "Add"}
            </div>
          </div>

          <div className="list">
            {ToDo.map((item) => (
              <ToDoComponent
                key={item._id}
                text={item.text}
                updateMode={() => UpdateMode(item._id, item.text)}
                deleteToDo={() => handleDelete(item._id, SetToDo)}
              />
            ))}
          </div>
        </form>
      </div>
      <Header />
      <ToastContainer />
    </>
  );
}

export default ToDo;
