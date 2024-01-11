import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet'
import { Link } from 'react-router-dom';

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

        console.log('Field Name:', fieldName);
        console.log('Value:', value);
    };

    const handleAddTask = () => {
        const emptyFields = [];

        // Check if all fields are filled
        if (!taskData.taskTitle) emptyFields.push('Task Title');
        if (!taskData.estimatedTime) emptyFields.push('Estimated Time');
        if (!taskData.categoryColor) emptyFields.push('Category Color');
        if (!taskData.categoryType) emptyFields.push('Category Type');
        if (!taskData.priority) emptyFields.push('Priority');

        if (emptyFields.length > 0) {
            setError(`Please fill in the following fields: ${emptyFields.join(', ')}`);
            return;
        }

        // Clear any previous error
        setError('');

        // Do something with the taskData, such as saving it to state or making an API call.
        console.log('Task Data:', taskData);
    };

    const exitTaskCreator = () => {
        handleAddTask();
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

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div>
                <label>Task Title</label>
                <input
                    type="text"
                    placeholder="Task title here..."
                    onChange={(e) => handleInputChange('taskTitle', e)}
                />
            </div>

            {/* Estimated Time */}
            <div>
                <label>Estimated Time</label>
                <select
                    value={taskData.estimatedTime}
                    onChange={(e) => handleInputChange('estimatedTime', e)}
                >
                    <option value="">Select time…</option>
                    <option value="5">5 minutes</option>
                    <option value="15">15 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="45">45 minutes</option>
                    <option value="60">1 hour</option>
                </select>
            </div>

            {/* Category Color */}
            <div>
                <label>Category Color</label>
                <select
                    value={taskData.categoryColor}
                    onChange={(e) => handleInputChange('categoryColor', e)}
                >
                    <option value="">Select category color…</option>
                    <option value="blue"><i class="fa-solid fa-circle blueCircle"></i>Blue</option>
                    <option value="green"><i class="fa-solid fa-circle greenCircle"></i>Green</option>
                    <option value="orange"><i class="fa-solid fa-circle orangeCircle"></i>Orange</option>
                    <option value="purple"><i class="fa-solid fa-circle purpleCircle"></i>Purple</option>
                    <option value="red"><i class="fa-solid fa-circle redCircle"></i>Red</option>
                </select>
            </div>

            {/* Category Type */}
            <div>
                <label>Category Type</label>
                <select
                    value={taskData.categoryType}
                    onChange={(e) => handleInputChange('categoryType', e)}
                >
                    <option value="">Select category type…</option>
                    <option value="health">Health</option>
                    <option value="household">Household</option>
                    <option value="childcare">Childcare</option>
                    <option value="errands">Errands</option>
                    <option value="hobby">Hobby</option>
                </select>
            </div>

            {/* Priority */}
            <div>
                <label>Priority</label>
                <select
                    value={taskData.priority}
                    onChange={(e) => handleInputChange('priority', e)}
                >
                    <option value="">Select priority…</option>
                    <option value="High"><i class="fa-solid fa-flag redFlag"></i>High</option>
                    <option value="Medium"><i class="fa-solid fa-flag orangeFlag"></i>Medium</option>
                    <option value="Low"><i class="fa-solid fa-flag greenFlag"></i>Low</option>
                </select>
            </div>

            <button className="addTaskButtonCreator" onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default TaskCreator;

