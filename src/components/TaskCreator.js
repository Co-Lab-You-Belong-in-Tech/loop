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
        task_title: '',
        description: "description",
        estimated_time: '',
        category_color: '',
        category_type: '',
        new_category: null,
        task_priority: ''
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
        if (!taskData.task_title) errors.task_title = 'Please enter a title for your To Do';
        if (!taskData.estimated_time) errors.estimated_time = 'Please select an Estimated Time';
        if (!taskData.category_color) errors.category_color = 'Please select a Category Color';
        if (!taskData.category_type) errors.category_type = 'Please select a Category Type';
        if (!taskData.task_priority) errors.task_priority = 'Please select a Priority';

        if (Object.keys(errors).length > 0) {
            setError(errors);
            return;
        }

        // Clear any previous error
        setError('');

        axios.post('https://loop-i5gz.onrender.com/api/task/add', taskData)
            .then((response) => {
                console.log(response.data.data[0]);
            })
            .catch((error) => {
                console.error('Error adding task:', error);
                console.error('Response data:', error.response.data);
                console.error('Response status:', error.response.status);
                setError('Error adding task. Please try again.');
            });

        console.log(taskData);
        // let data = JSON.stringify({
        //     "task_title": "hello"
        // });

        // let config = {
        //     method: 'post',
        //     maxBodyLength: Infinity,
        //     url: 'https://loop-i5gz.onrender.com/api/task/add',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     data: data
        // };

        // axios(config)
        //     .then((response) => {
        //         console.log(JSON.stringify(response.data));
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     });
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
                        className={`taskInput ${error && !taskData.task_title ? 'error' : ''}`}
                        label="Task Title"
                        name="taskTitle"
                        value={taskData.task_title}
                        onChange={(e) => handleInputChange('task_title', e)}
                        sx={{
                            width: '100%',
                            borderRadius: '12px',
                            marginBottom: '20px'
                        }}
                    />
                </FormControl>
                {error.task_title && <p className="errorText">{error.task_title}</p>}
            </div>

            {/* Estimated Time */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        sx={{ textAlign: 'center', marginBottom: '8px' }}
                        htmlFor="estimatedTime"
                        className={`inputLabel ${error && !taskData.estimated_time ? 'error' : ''}`}
                    >
                        Estimated Time
                    </InputLabel>
                    <Select
                        id='estimatedTime'
                        className={`taskInput ${error && !taskData.estimated_time ? 'error' : ''}`}
                        value={taskData.estimated_time}
                        onChange={(e) => handleInputChange('estimated_time', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            borderRadius: '12px',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="5 minutes">5 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="15 minutes">15 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="30 minutes">30 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="45 minutes">45 minutes</MenuItem>
                        <Divider />
                        <MenuItem value="1 hour">1 Hour</MenuItem>
                    </Select>
                </FormControl>
                {error.estimated_time && <p className="errorText">{error.estimated_time}</p>}
            </div>

            {/* Category Color */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="categoryColor"
                        className={`inputLabel ${error && !taskData.category_color ? 'error' : ''}`}
                    >
                        Category Color
                    </InputLabel>
                    <Select
                        id='categoryColor'
                        className={`taskInput ${error && !taskData.category_color ? 'error' : ''}`}
                        value={taskData.category_color}
                        onChange={(e) => handleInputChange('category_color', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            borderRadius: '12px',
                            [`& .${selectClasses.indicator}`]: {
                                transition: '0.2s',
                                [`&.${selectClasses.expanded}`]: {
                                    transform: 'rotate(-180deg)',
                                },
                            },
                        }}
                    >
                        <MenuItem value="Blue"><i class="fa-solid fa-circle blueCircle"></i> Blue</MenuItem>
                        <Divider />
                        <MenuItem value="Green"><i class="fa-solid fa-circle greenCircle"></i> Green</MenuItem>
                        <Divider />
                        <MenuItem value="Orange"><i class="fa-solid fa-circle orangeCircle"></i> Orange</MenuItem>
                        <Divider />
                        <MenuItem value="Purple"><i class="fa-solid fa-circle purpleCircle"></i> Purple</MenuItem>
                        <Divider />
                        <MenuItem value="Red"><i class="fa-solid fa-circle redCircle"></i>Red</MenuItem>
                    </Select>
                </FormControl>
                {error.category_color && <p className="errorText">{error.category_color}</p>}
            </div>

            {/* Category Type */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="categoryType"
                        className={`inputLabel ${error && !taskData.category_type ? 'error' : ''}`}
                    >
                        Select category type
                    </InputLabel>
                    <Select
                        id='categoryType'
                        className={`taskInput ${error && !taskData.category_type ? 'error' : ''}`}
                        value={taskData.category_type}
                        onChange={(e) => handleInputChange('category_type', e)}
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
                        <MenuItem value="Health">Health</MenuItem>
                        <Divider />
                        <MenuItem value="Household">Household</MenuItem>
                        <Divider />
                        <MenuItem value="Childcare">Childcare</MenuItem>
                        <Divider />
                        <MenuItem value="Errands">Errands</MenuItem>
                        <Divider />
                        <MenuItem value="Hobby">Hobby</MenuItem>
                    </Select>
                </FormControl>
                {error.category_type && <p className="errorText">{error.category_type}</p>}
            </div>

            {/* Priority */}
            <div>
                <FormControl fullWidth>
                    <InputLabel
                        htmlFor="priority"
                        className={`inputLabel ${error && !taskData.task_priority ? 'error' : ''}`}
                    >
                        Select priority
                    </InputLabel>
                    <Select
                        id='priority'
                        className={`taskInput ${error && !taskData.task_priority ? 'error' : ''}`}
                        value={taskData.task_priority}
                        onChange={(e) => handleInputChange('task_priority', e)}
                        indicator={<KeyboardArrowDown />}
                        sx={{
                            width: '100%',
                            borderRadius: '12px',
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
                {error.task_priority && <p className="errorText">{error.task_priority}</p>}
            </div>

            <button className="addTaskButtonCreator" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskCreator;