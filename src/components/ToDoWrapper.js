import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import { v4 as uuidv4 } from "uuid";
import TaskContainer from "./TaskContainer";
import { EditTodoForm } from "./EditTaskForm";
import DarkModeButton from "./DarkModeButton";
uuidv4();

export const ToDoWrapper = () => {
  const [tasksList, setTasksList] = useState([]);

  const [darkMode, setDarkMode] = useState(false);

  const darkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const addTask = (taskItem) => {
    setTasksList([
      ...tasksList,
      { id: uuidv4(), task: taskItem, completed: false, isEditing: false },
    ]);
  };

  const deleteTask = (id) => {
    setTasksList(tasksList.filter((task) => task.id !== id));
  };

  const toggleCompleted = (id) => {
    setTasksList(
      tasksList.map((task) => {
        return task.id === id ? { ...task, completed: !task.completed } : task;
      })
    );
  };

  const editTask = (value, id) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id
          ? { ...task, task: value, isEditing: !task.isEditing }
          : task
      )
    );
  };

  const showEditForm = (id) => {
    setTasksList(
      tasksList.map((task) =>
        task.id === id ? { ...task, isEditing: !task.isEditing } : task
      )
    );
  };

  return (
    <div
      className={`TodoWrapper ${
        darkMode ? "DarkBackground" : "LightBackground"
      }`}
    >
      <ToDoForm addTask={addTask}></ToDoForm>
      {tasksList.map((task) => {
        return (
          <div>
            <TaskContainer
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              toggleCompleted={toggleCompleted}
              showEditForm={showEditForm}
            ></TaskContainer>
            {task.isEditing ? (
              <EditTodoForm editTask={editTask} task={task} />
            ) : (
              <></>
            )}
          </div>
        );
      })}
      <DarkModeButton
        darkMode={darkMode}
        darkModeToggle={darkModeToggle}
      ></DarkModeButton>
    </div>
  );
};
