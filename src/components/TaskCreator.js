import { useState, useEffect } from 'react';
import * as React from 'react';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Sheet from '@mui/joy/Sheet'
import { selectClasses } from '@mui/joy/Select';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Divider from '@mui/joy/Divider';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import axios from 'axios';

function TaskCreator() {
    const [open, setOpen] = useState(false);
    const [taskData, setTaskData] = useState({
        taskTitle: '',
        estimatedTime: '',
        categoryColor: '',
        categoryType: '',
        priority: '',
    });

    const [error, setError] = useState('');

    const handleInputChange = (fieldName, event) => {
        const value = event.target.value;

        setTaskData((prevTaskData) => ({
            ...prevTaskData,
            [fieldName]: value,
        }));
    };

    const handleAddTask = () => {
        const errors = {};

        // Check if all fields are filled
        if (!taskData.taskTitle) errors.taskTitle = 'Please enter a Task Title';
        if (!taskData.estimatedTime) errors.estimatedTime = 'Please select an Estimated Time';
        if (!taskData.categoryColor) errors.categoryColor = 'Please select a Category Color';
        if (!taskData.categoryType) errors.categoryType = 'Please select a Category Type';
        if (!taskData.priority) errors.priority = 'Please select a Priority';

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

        console.log(taskData);
    };

    const exitTaskCreator = () => {
        setOpen(true);
    };
    
    return (
        <div className="taskCreator">
            <React.Fragment>
                <Button variant="plain" onClick={() => exitTaskCreator()}>
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

            <h2 className="creatorTitle">Add Task</h2>

            <div>
                <FormControl fullWidth>
                    <TextField
                        id='taskTitle'
                        className={`taskInput ${error && !taskData.taskTitle ? 'error' : ''}`}
                        label="Task Title"
                        name="taskTitle"
                        value={taskData.taskTitle}
                        onChange={(e) => handleInputChange('taskTitle', e)}
                        sx={{
                            width: '100%',
                            marginBottom: '20px'
                        }}
                    />
                </FormControl>
                {error.taskTitle && <p className="errorText">{error.taskTitle}</p>}
            </div>

            {/* Estimated Time */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        sx={{ textAlign: 'center', marginBottom: '8px' }}
                        htmlFor="estimatedTime"
                        className={`inputLabel ${error && !taskData.estimatedTime ? 'error' : ''}`}
                    >
                        Estimated Time
                    </InputLabel>
                    <Select
                        id='estimatedTime'
                        className={`taskInput ${error && !taskData.estimatedTime ? 'error' : ''}`}
                        value={taskData.estimatedTime}
                        onChange={(e) => handleInputChange('estimatedTime', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="5">5 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="15">15 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="30">30 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="45">45 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="60">60 minutes</MenuItem>
                    </Select>
                </FormControl>
                {error.estimatedTime && <p className="errorText">{error.estimatedTime}</p>}
            </div>

            {/* Category Color */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="categoryColor"
                        className={`inputLabel ${error && !taskData.categoryColor ? 'error' : ''}`}
                    >
                        Category Color
                    </InputLabel>
                    <Select
                        id='categoryColor'
                        className={`taskInput ${error && !taskData.categoryColor ? 'error' : ''}`}
                        value={taskData.categoryColor}
                        onChange={(e) => handleInputChange('categoryColor', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="blue"><i class="fa-solid fa-circle blueCircle"></i> Blue</MenuItem>
                        <Divider />
                        <MenuItem value="green"><i class="fa-solid fa-circle greenCircle"></i> Green</MenuItem>
                        <Divider />
                        <MenuItem value="orange"><i class="fa-solid fa-circle orangeCircle"></i> Orange</MenuItem>
                        <Divider />
                        <MenuItem value="purple"><i class="fa-solid fa-circle purpleCircle"></i> Purple</MenuItem>
                        <Divider />
                        <MenuItem value="red"><i class="fa-solid fa-circle redCircle"></i>Red</MenuItem>
                    </Select>
                </FormControl>
                {error.categoryColor && <p className="errorText">{error.categoryColor}</p>}
            </div>

            {/* Category Type */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="categoryType"
                        className={`inputLabel ${error && !taskData.categoryType ? 'error' : ''}`}
                    >
                        Select category type
                    </InputLabel>
                    <Select
                        id='categoryType'
                        className={`taskInput ${error && !taskData.categoryType ? 'error' : ''}`}
                        value={taskData.categoryType}
                        onChange={(e) => handleInputChange('categoryType', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="health">Health</MenuItem>
                        <Divider />
                        <MenuItem value="household">Household</MenuItem>
                        <Divider />
                        <MenuItem value="childcare">Childcare</MenuItem>
                        <Divider />
                        <MenuItem value="errands">Errands</MenuItem>
                        <Divider />
                        <MenuItem value="hobby">Hobby</MenuItem>
                    </Select>
                </FormControl>
                {error.categoryType && <p className="errorText">{error.categoryType}</p>}
            </div>

            {/* Priority */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="priority"
                        className={`inputLabel ${error && !taskData.priority ? 'error' : ''}`}
                    >
                        Select priority
                    </InputLabel>
                    <Select
                        id='priority'
                        className={`taskInput ${error && !taskData.priority ? 'error' : ''}`}
                        value={taskData.priority}
                        onChange={(e) => handleInputChange('priority', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
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

            <button className="addTaskButtonCreator" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskCreator;