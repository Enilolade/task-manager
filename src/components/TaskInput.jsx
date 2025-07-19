"use client";

import { useState } from "react";

function TaskInput({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title && task) {
      onAddTask({ title, task });

      setTitle("");
      setTask("");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Add New Task</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Task Description"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default TaskInput;
