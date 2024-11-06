// delete a task button 
// delTask.jsx
const DelTask = ({ onDelete, taskId }) => {
    return (
      <button
        onClick={() => onDelete(taskId)}
        className="bg-red text-white px-3 py-1 rounded hover:bg-red-600"
      >
        Delete
      </button>
    );
  };
  
  export default DelTask;
  