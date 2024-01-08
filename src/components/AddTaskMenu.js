import * as React from 'react';
import { Link } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ListItemButton from '@mui/joy/ListItemButton';
import Box from '@mui/material/Box';
import List from '@mui/joy/List';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import { Divider } from '@mui/joy';
import { styled } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

const drawerBleeding = 56;

const Root = styled('div')(({ theme }) => ({
    height: '100%',
    backgroundColor:
        theme.palette.mode === 'light' ? grey[100] : theme.palette.background.default,
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

const DrawerPaper = styled('div')({
    transform: 'translate(0, 0)',
    transition: 'transform 0.3s ease-in-out',
});

function AddTaskMenu({ isOpen, onClose }) {
    return (
        <div className="addTaskMenu">
            <Root>
                <CssBaseline />
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
                            height: `calc(50% - ${drawerBleeding}px)`,
                            overflow: 'visible',
                        },
                    }}
                >
                    <DrawerPaper>
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
                            <List size="lg" component="nav">
                                <ListItemButton>
                                    <Link to="/taskcreator " onClick={() => onClose()}>
                                        <h3><span class="material-icons">add</span>Create Task</h3>
                                    </Link>
                                </ListItemButton>
                            </List>
                        </StyledBox>
                    </DrawerPaper>
                </SwipeableDrawer>
            </Root>
            <h2>Add Task</h2>
            <Divider orientation="horizontal" />
        </div>
    );
}

export default AddTaskMenu;

