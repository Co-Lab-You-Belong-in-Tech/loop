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
import AddTaskMenu from './AddTaskMenu'; 

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

function BottomMenu({ isOpen, onClose, onTasksLinkClick, onHabitLinkClick }) {
    const [tasksLinkClicked, setTasksLinkClicked] = useState(false);

    const handleTasksLinkClick = () => {
        setTasksLinkClicked(true);
        onClose();
        onTasksLinkClick(); 
    };

    const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.palette.mode === 'light' ? grey[200] : grey[700],
        color: theme.palette.mode === 'light' ? theme.palette.text.primary : theme.palette.text.secondary,
        padding: '16px',
        height: '120px',
        textDecoration: 'none',
        textAlign: 'center',
        '&:hover': {
            backgroundColor: theme.palette.mode === 'light' ? grey[300] : grey[800],
        },
        '& .material-icons': {
            fontSize: '2rem',
            marginBottom: '8px',
            display: 'block',
            color: '#636B74',
        },
        '& a': {
            color: 'black', 
        }
    }));

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

            <SwipeableDrawer
                anchor="bottom"
                open={isOpen}
                onClose={() => onClose()}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={true}
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
                        borderTopLeftRadius: '50px',
                        borderTopRightRadius: '50px',
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
                            marginTop: '20px',
                            gap: '8px',
                            fontSize: 'xl',
                            padding: '16px', 
                            alignItems: 'center', 
                            justifyContent: 'center', 
                            height: '100%',
                        }}
                    >
                        <StyledListItemButton>
                            <Link to="/" className="linkComponent" onClick={() => onClose()}>
                                <span className="material-icons">calendar_today</span>Add Event
                            </Link>
                        </StyledListItemButton>
                        <StyledListItemButton>
                            <Link className="linkComponent" onClick={handleTasksLinkClick}>
                                <span className="material-icons">content_paste</span>Add Task
                            </Link>
                        </StyledListItemButton>
                        <StyledListItemButton>
                            <Link className="linkComponent" onClick={onHabitLinkClick}>
                                <span className="material-icons">favorite</span>Add Habit
                            </Link>
                        </StyledListItemButton>
                        <StyledListItemButton>
                            <Link to="/todocreator" className="linkComponent" onClick={() => onClose()}>
                                <span className="material-icons">check_circle_outline</span>Add To-Do
                            </Link>
                        </StyledListItemButton>
                    </List>
                </StyledBox>
            </SwipeableDrawer>

            {tasksLinkClicked && <AddTaskMenu onClose={() => setTasksLinkClicked(false)} />}
        </Root>
    );
}

export default BottomMenu;
