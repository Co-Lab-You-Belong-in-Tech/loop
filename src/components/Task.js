import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MoreVert from '@mui/icons-material/MoreVert';
import MenuButton from '@mui/joy/MenuButton';
import axios from 'axios';

function Task({ task, onDeleteTask }) {

    const handleClick = () => {
        onDeleteTask(task.task_id);
    }

    return (
        <div className="task">
            <h3>{task.task_title}</h3>
            <p>{task.task_desc}</p>
            <ListItemDecorator>
                <MoreVert
                    onClick={handleClick} />
            </ListItemDecorator>
        </div>
    );
}

export default Task;