// App.jsx
import { useState } from 'react';
import AddTask from './components/addTask';
import TaskList from './components/taskList';
import SearchBox from './components/searchBox';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to add a new task   
  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), ...newTask }]);
  };

  // Function to delete a task
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Function to edit a task
  const editTask = (updatedTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  // Filtered tasks based on search query
  const filteredTasks = tasks.filter((task) =>
    task.taskName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-bl from-purple via-orange to-yellow ">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-edu text-center mb-6">Task Manager</h1>

        {/* Add Task Form */}
        <AddTask onAdd={addTask} />

        {/* Search Box */}
        <SearchBox onSearch={setSearchQuery} />

        {/* Task List */}
        <TaskList tasks={filteredTasks} onDelete={deleteTask} onEdit={editTask} />
      </div>
    </div>
  );
};

export default App;
