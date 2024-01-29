import { useState } from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MoreVert from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

function Task({ task, onDeleteTask }) {

    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false);

    const deleteTask = () => {
        console.log(task)
        onDeleteTask(task.task_id);
    }

    const toggleDrawer = (inOpen) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setOpen(inOpen);
    };

    const handleMarkAsComplete = () => {
        setCompleted(!completed);
    };


    function getCircleByColor(color) {
        switch (color) {
            case 'Blue':
                return <i className="fa-solid fa-circle blueCircle"></i>;
            case 'Green':
                return <i className="fa-solid fa-circle greenCircle"></i>;
            case 'Orange':
                return <i className="fa-solid fa-circle orangeCircle"></i>;
            case 'Purple':
                return <i className="fa-solid fa-circle purpleCircle"></i>;
            case 'Red':
                return <i className="fa-solid fa-circle redCircle"></i>;
            default:
                return null;
        }
    }

    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <div className="taskTitleInfoDot">
                <div className="categoryColor">
                    {getCircleByColor(task.category_color)}
                </div>


                <div className="taskTitleAndInfo">
                    <div className="taskCardTitle">
                        <h3>{task.task_title}</h3>
                    </div>

                    <div className="taskInfo">
                        <p>
                            <i className="fa-solid fa-stopwatch"></i>
                            {task.estimated_time.minutes} minutes</p>
                        <i className="fa-solid fa-circle seperation"></i>
                        <p>{task.category_type}</p>
                    </div>
                </div>
            </div>
            
            <ListItemDecorator>
                <MoreVert
                    onClick={toggleDrawer(true)} />
            </ListItemDecorator>

            <Drawer 
            open={open} 
            onClose={toggleDrawer(false)}
            anchor="bottom"
            size='sm'
            elevation= "10">
                <Box
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                            <ListItem >
                            <ListItemButton 
                                onClick={handleMarkAsComplete}
                            >Mark as complete</ListItemButton>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemButton>Edit</ListItemButton>
                            </ListItem>
                            <Divider />

                            <ListItem>
                            <ListItemButton onClick={deleteTask}>Delete</ListItemButton>
                            </ListItem>
                            <Divider />

                            <ListItem>
                            <ListItemButton onClick={toggleDrawer(false)}>Cancel</ListItemButton>
                            </ListItem>
                    </List>
                </Box>
            </Drawer>
        </div>
    );
}

export default Task;