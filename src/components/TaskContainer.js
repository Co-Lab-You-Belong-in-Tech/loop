import Task from './Task'
import axios from 'axios';


function TaskContainer({apiData, setApiData}) {
    
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

            setApiData(prevApiData => ({
                ...prevApiData,
                data: prevApiData.data.filter(task => task.task_id !== taskId)
            }));
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div className="taskContainer">
            <p>Add a task, event, or to-do item by tapping “+” down below</p>

            {apiData && apiData.data && apiData.data.length > 0 && (
                <ul>
                    {apiData.data.map(task => (
                        <Task key={task.task_id} task={task} onDeleteTask={handleDeleteTask} />
                    ))}
                </ul>
            )}
        </div>
    );
}

export default TaskContainer;