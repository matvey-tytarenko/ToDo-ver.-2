import React, { useState, useRef } from "react";
import "../styles/Todo.scss";
import { ToastContainer, toast } from "react-toastify";

function ToDoComponent({ text, updateMode, deleteToDo }) {
  const swear_words = [
    "arse",
    "arsehead",
    "arsehole",
    "ass",
    "asshole",
    "bastard",
    "bitch",
    "bloody",
    "bollocks",
    "brotherfucker",
    "bugger",
    "bullshit",
    "child-fucker",
    "сhrist on a bike",
    "сhrist on a cracker",
    "cock",
    "cocksucker",
    "crap",
    "cunt",
    "cyka",
    "сука",
    "blyat",
    "блять",
    "damn",
    "dick",
    "dumb",
    "dickhead",
    "dyke",
    "fucker",
    "frigger",
    "fuck",
    "shit",
    "kike",
    "nigger",
    "nigga",
    "niger",
    "niga",
    "niggra",
    "nigra",
    "piss",
    "prick",
    "pussy",
    "shit",
    "shite",
    "slut",
    "suka",
    "whore",
    "spastic",
    "Jesus",
    "jesus",
    "turd",
    "twat",
    "wanker",
    "jerk",
    "хуй",
    "долбоёб",
    "даун",
    "пидор",
    "хуёвый",
    "пизда",
    "россия",
    "путин",
    "параша",
  ];

  const [isChecked, setIsChecked] = useState(false);

  const textContainsSwearWord = (text) => {
    for (let i = 0; i < swear_words.length; i++) {
      if (text.toLowerCase().includes(swear_words[i])) {
        return true; // Если найдено хотя бы одно нецензурное слово, вернуть true
      }
    }
    return false; // Если не найдено нецензурных слов, вернуть false
  };

  const censored = () => {
    const words = text.split(/\s+/);
    const censoredText = words.map((words) => {
      if (textContainsSwearWord(words)) {
        return "*".repeat(words.length);
      } else {
        return words;
      }
    });
    return censoredText.join(" ");
  };

  const checkboxRef = useRef(null);

  const handleCheckboxChanged = () => {
    setIsChecked(!isChecked);
    this.className.add("active");
  };

  const TaskCompliteStyle = {
    textDecoration: isChecked ? "line-through" : "none",
  };

  const checkBoxStyles = {
    background: isChecked ? "green" : ""
  }

  return (
    <>
      <div className="todo">
        <div className="text" style={TaskCompliteStyle}>
          {censored()}
          <div className="checkbox-container" onClick={handleCheckboxChanged} style={checkBoxStyles}>
            <input
              type="checkbox"
              id="checkbox"
              className="checkbox"
              checked={isChecked}
              onChange={() => {}} // Не требуется обработчик изменения
            />
          </div>
        </div>
        <div className="icons">
          <i className="fas fa-pen-to-square pen" onClick={updateMode}></i>
          <i className="fas fa-trash-can trash" onClick={deleteToDo}></i>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default ToDoComponent;
