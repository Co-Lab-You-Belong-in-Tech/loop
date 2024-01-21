import FormControl from '@mui/material/FormControl';
import Textarea from '@mui/joy/Textarea';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet'
import Select from '@mui/material/Select';
import Divider from '@mui/joy/Divider';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { selectClasses } from '@mui/joy/Select';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

function ToDoCreator() {
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);
    const [toDoData, setToDoData] = useState({
        toDoTitle: '',
        priority: '',
        notes: '',
    });

    const handleInputChange = (fieldName, event) => {
        const value = event.target.value;

        setToDoData((prevToDoData) => ({
            ...prevToDoData,
            [fieldName]: value,
        }));
    };

    const exitToDoCreator = () => {
        setOpen(true)
    }

    const handleAddToDo = () => {
        const errors = {};

        // Check if all fields are filled
        if (!toDoData.toDoTitle) errors.toDoTitle = 'Please enter a Task Title';
        if (!toDoData.priority) errors.priority = 'Please select a Priority';

        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }

        // Clear any previous error
        setError('');

        // axios.post('https://loop-i5gz.onrender.com/api/task/add', taskData)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //         // Handle the response if needed
        //     })
        //     .catch((error) => {
        //         console.error('Error adding task:', error);
        //         // Handle API call error
        //         // Set an error message
        //         setError('Error adding task. Please try again.');
        //     });

        console.log(toDoData);
    };

    return (
        <div className="toDoCreator">
            <React.Fragment>
                <Button variant="plain" onClick={() => exitToDoCreator()}>
                    <span class="material-icons">close</span>
                </Button>
                <Modal
                    aria-labelledby="Exit Task Creator "
                    aria-describedby="Exit Task Creator "
                    open={open}
                    onClose={() => setOpen(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            maxWidth: 500,
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                        }}
                    >
                        <ModalClose variant="plain" sx={{ m: 1 }} />
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                        >
                            Exit Task
                        </Typography>
                        <Typography id="modal-desc" textColor="text.tertiary">
                            Are you sure you want to exit this task? Your changes will not be saved.
                        </Typography>
                        <Button onClick={() => setOpen(false)} variant="plain">Back</Button>
                        <Button onClick={function () { }} variant="plain"><Link className="linkComponent" to={'/home'}>Confirm</Link></Button>
                    </Sheet>
                </Modal>
            </React.Fragment>
            <h2 className="toDoHeader">Add to-do</h2>


            {/* To do title */}
            <div>
                <FormControl >
                    <TextField
                        id='toDoTitle'
                        className={`toDoInput ${error && !toDoData.toDoTitle ? 'error' : ''} `}
                        label="To Do Title"
                        name="toDoTitle"
                        value={toDoData.toDoTitle}
                        onChange={(e) => handleInputChange('toDoTitle', e)}
                        style={{ borderRadius: '12px' }}
                        sx={{
                            width: '100%',
                            marginBottom: '20px',
                        }}
                    />
                </FormControl>
                {error.toDoTitle && <p className="errorText">{error.toDoTitle}</p>}
            </div>

            {/* Priority */}
            <div>
                <FormControl >
                    <InputLabel
                        htmlFor="priority"
                        name="Priority"
                        className={`inputLabel ${error && !toDoData.priority ? 'error' : ''}`}
                    >
                        Select priority
                    </InputLabel>
                    <Select
                        id='priority'
                        label="Priority"
                        className={`toDoInput ${error && !toDoData.priority ? 'error' : ''}`}
                        value={toDoData.priority}
                        onChange={(e) => handleInputChange('priority', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            borderRadius: '12px',
                            width: '100%',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="High"><i class="fa-solid fa-flag redFlag"></i> High</MenuItem>
                        <Divider />
                        <MenuItem value="Medium"><i class="fa-solid fa-flag orangeFlag"></i> Medium</MenuItem>
                        <Divider />
                        <MenuItem value="Low"><i class="fa-solid fa-flag greenFlag"></i>Low</MenuItem>
                    </Select>
                </FormControl>
                {error.priority && <p className="errorText">{error.priority}</p>}
            </div>



            {/* Text Area */}
            <FormControl>
                <InputLabel
                    htmlFor="notes"
                    name="Notes"
                >
                </InputLabel>
                <Textarea 
                    sx={{ borderRadius: '12px', }}
                placeholder={'Notes'}
                minRows={6} />
            </FormControl>

            <button className="addToDo addTaskButtonCreator" onClick={handleAddToDo}>Add To Do</button>
        </div>
    );
}

export default ToDoCreator;