import Task from './Task'
import axios from 'axios';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Skeleton from '@mui/joy/Skeleton';

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

    const emptyStateP = <p>Add a task, event, or to-do item by tapping “+” down below</p>

    return (
        <div className="taskContainer">
            {apiData && apiData.data && apiData.data.length > 0 ? (
                <ul>
                    {apiData.data.map(task => (
                        <li key={task.task_id}>
                            <Task task={task} onDeleteTask={handleDeleteTask} />
                        </li>
                    ))}
                </ul>
            ) : (
                emptyStateP
            )}
        </div>
    );
}

export default TaskContainer;