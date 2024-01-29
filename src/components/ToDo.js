import { useState } from 'react';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import MoreVert from '@mui/icons-material/MoreVert';
import Box from '@mui/joy/Box';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import Divider from '@mui/joy/Divider';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';

function ToDo({ todo, onDeleteToDo }) {

    const [open, setOpen] = useState(false);
    const [completed, setCompleted] = useState(false);

    const deleteToDo = () => {
        onDeleteToDo(todo.todo_id);
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


    function getFlagByPriority(priority) {
        switch (priority) {
            case 'High':
                return <i className="fa-solid fa-flag redFlag"></i>;
            case 'Medium':
                return <i className="fa-solid fa-flag orangeFlag"></i>;
            case 'Low':
                return <i className="fa-solid fa-flag greenFlag"></i>
            default:
                return null;
        }
    }

    return (
        <div className={`task ${completed ? 'completed' : ''}`}>
            <div className="toDoContainer">
                <div className="taskCardTitle">
                    <h3>{todo.todo_title}</h3>
                </div>

                <div className="notes">
                    <p>{todo.notes}</p>
                </div>

                    <div className="priorityColor">
                        {getFlagByPriority(todo.task_priority)} <p>{todo.task_priority} priority</p>
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
                elevation="10">
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
                            <ListItemButton onClick={deleteToDo}>Delete</ListItemButton>
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

export default ToDo;