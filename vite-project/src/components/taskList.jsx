// a grid of the task list 
// taskList.jsx
import TaskItem from './taskItem';

const TaskList = ({ tasks, onDelete, onEdit }) => {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;
