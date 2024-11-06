// a text box to input name for new tasks
// nameTask.jsx
const NameTask = ({ taskName, onNameChange }) => {
    return (
      <input
        type="text"
        value={taskName}
        onChange={(e) => onNameChange(e.target.value)}
        className="border w-full p-2 rounded"
      />
    );
  };
  
  export default NameTask;
  