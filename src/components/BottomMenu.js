import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Global } from '@emotion/react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import ListItemButton from '@mui/joy/ListItemButton';
import Box from '@mui/material/Box';
import List from '@mui/joy/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import AddTaskMenu from './AddTaskMenu';  // Import the AddTaskMenu component

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor: theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
}));

const StyledBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'light' ? '#fff' : grey[800],
}));

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[900],
    borderRadius: 3,
    position: 'absolute',
    top: 8,
    left: 'calc(50% - 15px)',
}));

function BottomMenu({ isOpen, onClose, onTasksLinkClick }) {
    const [tasksLinkClicked, setTasksLinkClicked] = useState(false);

    const handleTasksLinkClick = () => {
        setTasksLinkClicked(true);
        onClose();
        onTasksLinkClick();  // Call the function to open AddTaskMenu
    };

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(50% - ${drawerBleeding}px)`,
                        overflow: 'visible',
                    },
                }}
            />
            <Box sx={{ textAlign: 'center', pt: 1 }}>
                <Button onClick={() => onClose()}>Close</Button>
            </Box>
            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => onClose()}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    '& .MuiDrawer-paper': {
                        transform: isOpen ? 'translate(0, 0)' : 'translate(0, 100%)',
                        transition: 'transform 0.3s ease-in-out',
                    },
                }}
            >
                <StyledBox
                    sx={{
                        position: 'absolute',
                        top: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        visibility: 'visible',
                        right: 0,
                        left: 0,
                    }}
                >
                    <Puller />
                    <List
                        size="lg"
                        component="nav"
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '8px',
                            fontSize: 'xl',
                        }}
                    >
                        <ListItemButton>
                            <Link to="/" onClick={() => onClose()}>
                                <span className="material-icons">calendar_today</span>Add Event
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link onClick={handleTasksLinkClick}>
                                <span className="material-icons">content_paste</span>Add Task
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/" onClick={() => onClose()}>
                                <span className="material-icons">favorite</span>Add Habit
                            </Link>
                        </ListItemButton>
                        <ListItemButton>
                            <Link to="/" onClick={() => onClose()}>
                                <span className="material-icons">check_circle_outline</span>Add To-Do
                            </Link>
                        </ListItemButton>
                    </List>
                </StyledBox>
            </SwipeableDrawer>

            {tasksLinkClicked && <AddTaskMenu onClose={() => setTasksLinkClicked(false)} />}
        </Root>
    );
}

export default BottomMenu;
