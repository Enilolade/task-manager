"use client";

import TaskList from "@/components/TaskList";
import TaskInput from "@/components/TaskInput";

import { useState } from "react";

export default function Home() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      task: "Complete the project documentation",
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      task: "Review the code changes",
      completed: false,
    },
  ]);

  const handleAddTask = (newTask) => {
    const newTaskObject = {
      id: tasks.length + 1,
      title: newTask.title,
      task: newTask.task,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTaskObject]);
  };

  return (
    <div>
      <TaskList tasks={tasks} />
      <TaskInput onAddTask={handleAddTask} />
    </div>
  );
}
