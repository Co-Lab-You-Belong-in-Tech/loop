import { useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
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
import AddHabitMenu from './AddHabitMenu';
import axios from 'axios';

function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [bottomMenuOpen, setBottomMenuOpen] = useState(false);
    const [addTaskMenuOpen, setAddTaskMenuOpen] = useState(false);
    const [addHabitMenuOpen, setAddHabitMenuOpen] = useState(false);

    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            if (!apiData) {
                try {
                    let config = {
                        method: 'get',
                        maxBodyLength: Infinity,
                        url: 'https://loop-i5gz.onrender.com/api/task',
                        headers: {
                        }
                    };

                    const response = await axios.request(config);
                    setApiData(response.data);
                } catch (error) {
                    console.log(error);
                }
            }
        };

        fetchData();
    }, [apiData]); 

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

    const handleAddHabitClick = () => {
        setBottomMenuOpen(false); 
        setAddHabitMenuOpen(true);
    };

    return (
        <div className="home">
            <IconButton color="neutral" onClick={handleMenuButtonClick}>
                <MenuIcon className='homeMenuIcon' />
            </IconButton>
            
            <Drawer className='sideMenuContainer' open={menuOpen} onClose={handleCloseMenuButtonClick}>
                <List size="lg" 
                component="nav"
                sx={{ flex: 'none', 
                fontSize: 'xl', }}>
                    <ListItemButton>
                        <Link to="/" className="linkComponent sideMenu"><span className="material-icons sideMenuIcon">
                            calendar_today
                        </span>Events</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/" className="linkComponent sideMenu"><span className="material-icons sideMenuIcon">
                            content_paste
                        </span>Tasks</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/" className="linkComponent sideMenu"><span className="material-icons sideMenuIcon">
                            check_circle_outline
                        </span>To-Do</Link>
                    </ListItemButton>
                    <ListItemButton>
                        <Link to="/" className="linkComponent sideMenu"><span className="material-icons sideMenuIcon">
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
                <BottomMenu isOpen={bottomMenuOpen} onClose={handleCloseBottomMenu} onTasksLinkClick={handleTasksLinkClick} onHabitLinkClick={handleAddHabitClick}/>
            </SwipeableDrawer>

            <Header />

            <TaskContainer apiData={apiData} setApiData={setApiData} />

            <IconButton 
            className='addButton' 
            variant="soft" 
            aria-label="Add Habit or Task" 
            onClick={handleAddButtonClick}
            style={{ color: '#0C626A', 
                backgroundColor: '#E3EFFB'
                    }}
            >
                <AddIcon  className='addButtonIcon'/>
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

            {/* Add Habit Menu */}
            <SwipeableDrawer
                anchor="bottom"
                open={addHabitMenuOpen}
                onClose={() => setAddHabitMenuOpen(false)}
                disableSwipeToOpen={false}
            >
                <AddHabitMenu isOpen={addHabitMenuOpen} onClose={() => setAddHabitMenuOpen(false)} />
            </SwipeableDrawer>

        </div>
    );
}

export default Home;