// editTask.jsx
import { useState } from 'react';

const EditTask = ({ onEdit, task }) => {
  const [taskName, setTaskName] = useState(task.taskName);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleEdit = (e) => {
    e.preventDefault();
    onEdit({ ...task, taskName, description, dueDate });
  };

  return (
    <form onSubmit={handleEdit} className="space-y-2">
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border w-full p-2 rounded"
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 rounded"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
        className="border w-full p-2 rounded"
      />
      <button
        type="submit"
        className="bg-green text-white px-3 py-1 rounded hover:bg-green-600"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditTask;
