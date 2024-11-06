// add a new task button 
// addTask.jsx
import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({ taskName, description, dueDate });
    setTaskName('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gradient-to-t from-pink via-purple to-blue shadow-md rounded p-4">
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border w-full p-2 mb-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Task
      </button>
    </form>
  );
};

export default AddTask;
