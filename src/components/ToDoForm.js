import { useState } from "react";
import React from "react";

const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleSubmitAddTask = (e) => {
    e.preventDefault();

    addTask(userInput);

    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmitAddTask}>
        <input
          type="text"
          placeholder="Add a task"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default ToDoForm;
