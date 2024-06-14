import { useState } from 'react';

function ToDoList() {
    const [tasks, setTasks] = useState(["Eat breakfast"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() === "") return; // Prevent adding empty tasks
        setTasks([...tasks, newTask]);
        setNewTask("");
    }
    function deleteTask(index) {
        setTasks(tasks.filter((_, i) => i !== index));
    }
    function moveTaskUp(index) {
        if (index === 0) return; // Can't move the first task up
        const newTasks = [...tasks];
        [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];
        setTasks(newTasks);
    }

    function moveTaskDown(index) {
        if (index === tasks.length - 1) return; // Can't move the last task down
        const newTasks = [...tasks];
        [newTasks[index], newTasks[index + 1]] = [newTasks[index + 1], newTasks[index]];
        setTasks(newTasks);
    }

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>
            <div>
                <input
                    type='text'
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={handleInputChange}
                />
<button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task}

                        <button onClick={() => deleteTask(index)}>Delete</button>
                        <button onClick={() => moveTaskUp(index)}>Move Up</button>
                        <button onClick={() => moveTaskDown(index)}>Move Down</button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
