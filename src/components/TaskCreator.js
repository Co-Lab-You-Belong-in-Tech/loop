import { useState } from 'react';

function TaskCreator() {
    const [taskData, setTaskData] = useState({
        taskTitle: '',
        estimatedTime: '',
        categoryColor: '',
        categoryType: '',
        priority: '',
    });

    const handleInputChange = (fieldName, event) => {
        const value = event.target.value;

        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [fieldName]: value,
        }));

        console.log('Field Name:', fieldName);
        console.log('Value:', value);
    };

    const handleAddTask = () => {
        // Do something with the taskData, such as saving it to state or making an API call.
        console.log('Task Data:', taskData);
    };

    return (
        <div className="taskCreator">
            <button onClick={handleAddTask}>Close</button>
            <h2 className="creatorTitle">Add Task</h2>
            <div>
                <label>Task Title</label>
                <input
                    type="text"
                    placeholder="Task title here..."
                    onChange={(e) => handleInputChange('taskTitle', e)}
                />
            </div>

            {/* Estimated Time */}
            <div>
                <label>Estimated Time</label>
                <select
                    value={taskData.estimatedTime}
                    onChange={(e) => handleInputChange('estimatedTime', e)}
                >
                    <option value="5">5 minutes</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                </select>
            </div>

            {/* Category Color */}
            <div>
                <label>Category Color</label>
                <select
                    value={taskData.categoryColor}
                    onChange={(e) => handleInputChange('categoryColor', e)}
                >
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                    <option value="orange">Orange</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                </select>
            </div>

            {/* Category Type */}
            <div>
                <label>Category Type</label>
                <select
                    value={taskData.categoryType}
                    onChange={(e) => handleInputChange('categoryType', e)}
                >
                    <option value="health">Health</option>
                    <option value="household">Household</option>
                    <option value="childcare">Childcare</option>
                    <option value="errands">Errands</option>
                    <option value="hobby">Hobby</option>
                </select>
            </div>

            {/* Priority */}
            <div>
                <label>Priority</label>
                <select
                    value={taskData.priority}
                    onChange={(e) => handleInputChange('priority', e)}
                >
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                </select>
            </div>

            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskCreator;
