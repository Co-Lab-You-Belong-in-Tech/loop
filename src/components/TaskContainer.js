import Task from './Task'
import ToDo from './ToDo';
import axios from 'axios';

function TaskContainer({ taskApiData, setTaskApiData, setTodoApiData, todoApiData }) {
    
    const handleDeleteTask = async (taskId) => {
        try {
            let data = '';

            let config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: `https://loop-i5gz.onrender.com/api/task/${taskId}`,
                headers: {
                },
                data: data
            };

            const response = await axios.request(config);
            console.log(JSON.stringify(response.data));

            setTaskApiData(prevApiData => ({
                ...prevApiData,
                data: prevApiData.data.filter(task => task.task_id !== taskId)
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleDeleteToDo = async (todo_id) => {
        try {
            let data = '';
            const config = {
                method: 'delete',
                maxBodyLength: Infinity,
                url: `https://loop-i5gz.onrender.com/api/todo/${todo_id}`,
                headers: {},
                data: data
            };

            await axios.request(config);
            setTodoApiData((prevApiData) => ({
                ...prevApiData,
                data: prevApiData.data.filter((todo) => todo.todo_id !== todo_id),
            }));
        } catch (error) {
            console.error('Error deleting ToDo:', error);
        }
    };

    const emptyStateP = <p>Add a task, event, or to-do item by tapping “+” down below</p>

    return (
        <div className="taskContainer">
            {taskApiData && taskApiData.data && taskApiData.data.length > 0 ? (
                <ul>
                    {taskApiData.data.map(task => (
                        <li key={task.task_id}>
                            <Task task={task} onDeleteTask={handleDeleteTask} />
                        </li>
                    ))}
                </ul>
            ) : (
                emptyStateP
            )}

            {todoApiData && todoApiData.data && todoApiData.data.length > 0 ? (
                <ul>
                    {todoApiData.data.map((todo) => (
                        <li key={todo.toDoId}>
                            <ToDo todo={todo} onDeleteToDo={handleDeleteToDo} />
                        </li>
                    ))}
                </ul>
            ) : (
                null
            )}
        </div>
    );
}

export default TaskContainer;