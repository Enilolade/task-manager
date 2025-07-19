"use client";

function TaskList({ tasks }) {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-5">Task List</h1>
      <ul className="list-disc pl-5">
        {tasks.map((task) => (
          <li key={task.id} className="mb-2">
            <strong>{task.title}:</strong> {task.task}{" "}
            {task.completed ? "(Completed)" : "(Pending)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
