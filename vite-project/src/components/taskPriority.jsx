// taskPriority.jsx
const TaskPriority = ({ priority }) => {
    const getPriorityColor = () => {
      switch (priority) {
        case 'High':
          return 'bg-red-500';
        case 'Medium':
          return 'bg-yellow-500';
        case 'Low':
          return 'bg-green-500';
        default:
          return 'bg-gray-500';
      }
    };
  
    return (
      <span className={`${getPriorityColor()} text-white px-2 py-1 rounded`}>
        {priority}
      </span>
    );
  };
  
  export default TaskPriority;
  