
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Header from './Header';
import TaskContainer from './TaskContainer';
import BottomMenu from './BottomMenu';
import AddTaskMenu from './AddTaskMenu';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bottomMenuOpen, setBottomMenuOpen] = useState(false);
    const [addTaskMenuOpen, setAddTaskMenuOpen] = useState(false);

    const handleMenuButtonClick = () => {
        setMenuOpen(!menuOpen);
    };

    const handleCloseMenuButtonClick = () => {
        setMenuOpen(false);
    };

    const handleAddButtonClick = () => {
        setBottomMenuOpen(true);
    };

    const handleCloseBottomMenu = () => {
        setBottomMenuOpen(false);
    };

    const handleTasksLinkClick = () => {
        setBottomMenuOpen(false);
        setAddTaskMenuOpen(true);
    };

    const handleCloseAddTaskMenu = () => {
        setAddTaskMenuOpen(false);
    };

    return (
        <div className="home">
            <IconButton color="neutral" onClick={handleMenuButtonClick}>
                <MenuIcon />
            </IconButton>
            <Drawer open={menuOpen} onClose={handleCloseMenuButtonClick}>
                <List size="lg" component="nav" sx={{ flex: 'none', fontSize: 'xl', '& > div': { justifyContent: 'center' } }}>
                    <ListItemButton>
                        <Link to="/"><span className="material-icons">
                            calendar_today
                        </span>Events</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/"><span className="material-icons">
                            content_paste
                        </span>Tasks</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/"><span className="material-icons">
                            check_circle_outline
                        </span>To-Do</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/"><span className="material-icons">
                            favorite
                        </span>Habit Tracker</Link>
                    </ListItemButton>
                </List>
            </Drawer>

            <SwipeableDrawer
                anchor="bottom"
                open={bottomMenuOpen}
                onClose={() => setBottomMenuOpen(false)}
                disableSwipeToOpen={false}
            >
                <BottomMenu isOpen={bottomMenuOpen} onClose={handleCloseBottomMenu} onTasksLinkClick={handleTasksLinkClick} />
            </SwipeableDrawer>
            <Header />
            <TaskContainer />
            <IconButton variant="soft" aria-label="Add Habit or Task" onClick={handleAddButtonClick}>
                <AddIcon />
            </IconButton>

            {/* AddTaskMenu */}
            <SwipeableDrawer
                anchor="bottom"
                open={addTaskMenuOpen}
                onClose={() => setAddTaskMenuOpen(false)}
                disableSwipeToOpen={false}
            >
                <AddTaskMenu isOpen={addTaskMenuOpen} onClose={handleCloseAddTaskMenu} />
            </SwipeableDrawer>
        </div>
    );
}

export default Home;