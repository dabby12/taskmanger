// taskItem.jsx
import DelTask from './delTask';
import EditTask from './editTask';

const TaskItem = ({ task, onDelete, onEdit }) => {
  return (
    <div className="p-4 bg-gradient-to-t from-green via-blue to-purple rounded-md shadow gap-10 space-y-6d ">
      <h3 className="font-rugeboogie text-xl">{task.taskName}</h3>
      <p>{task.description}</p>
      <p className="text-gray-500 text-sm font-serif">Due: {task.dueDate}</p>
      <div className="mt-4 flex space-x-2">
        <DelTask onDelete={onDelete} taskId={task.id} />
        <EditTask onEdit={onEdit} task={task} />
      </div>
    </div>
  );
};

export default TaskItem;
