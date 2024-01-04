import * as React from 'react';
import Header from "./Header";
import TaskContainer from "./TaskContainer";
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Drawer from '@mui/joy/Drawer';
import Input from '@mui/joy/Input';
import List from '@mui/joy/List';
import ListItemButton from '@mui/joy/ListItemButton';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';
import Menu from '@mui/icons-material/Menu';
import Add from '@mui/icons-material/Add';
import { useState } from 'react'

function Home() {
    const [open, setOpen] = React.useState(false);

    return (
        <div className="home">
            <IconButton color="neutral" onClick={() => setOpen(true)}>
                <Menu />
            </IconButton>
            <Drawer open={open} onClose={() => setOpen(false)}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 0.3,
                        ml: 'auto',
                        mt: 1,
                        mr: 2,
                    }}
                >
                    <Typography
                        component="label"
                        htmlFor="close-icon"
                        fontSize="sm"
                        fontWeight="lg"
                        sx={{ cursor: 'pointer' }}
                    >
                        Close
                    </Typography>
                    <ModalClose id="close-icon" sx={{ position: 'initial' }} />
                </Box>
                <List
                    size="lg"
                    component="nav"
                    sx={{
                        flex: 'none',
                        fontSize: 'xl',
                        '& > div': { justifyContent: 'center' },
                    }}
                >
                    <ListItemButton>Events</ListItemButton>
                    <ListItemButton>Tasks</ListItemButton>
                    <ListItemButton>To-Do</ListItemButton>
                    <ListItemButton>Habit Tracker</ListItemButton>
                </List>
            </Drawer>
            <Header />
            <TaskContainer />
            <IconButton variant="soft" aria-label="Add Habit or Task">
                <Add />
            </IconButton>
        </div>
    );
}

export default Home;