import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Textarea from '@mui/joy/Textarea';
import React, { useState } from 'react';
import { Button } from '@mui/joy';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet'
import { Link } from 'react-router-dom';

function ToDoCreator() {
    const [toDoTitle, setToDoTitle] = useState('');
    const [priority, setPriority] = useState('');
    const [notes, setNotes] = useState('');
    const [error, setError] = useState('');
    const [open, setOpen] = useState(false);

    const handleTitleChange = (e) => {
        setToDoTitle(e.target.value);
    };

    const handlePriorityChange = (e) => {
        setPriority(e.target.value);
    };

    const handleNotesChange = (e) => {
        setNotes(e.target.value);
    };

    const exitToDoCreator = () => {
        setOpen(true)
    }

    const handleAddToDo = () => {
        // Validate fields
        if (!toDoTitle || !priority || !notes) {
            setError('Please fill in all fields');
            return;
        }

        // Create an object with the saved state values
        const todoObject = {
            toDoTitle,
            priority,
            notes,
        };

        // Do something with the todoObject
        console.log('ToDo Object:', todoObject);

        // Reset the form and error state
        setToDoTitle('');
        setPriority('');
        setNotes('');
        setError('');
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
            <h2 className="taskTitle">Add to-do</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <label>To-Do Title</label>
                <input
                    type="text"
                    placeholder="To-do title here..."
                    value={toDoTitle}
                    onChange={handleTitleChange}
                />
            </div>

            <div>
                <label>Priority</label>
                <select value={priority} onChange={handlePriorityChange}>
                    <option value="">Select priority…</option>
                    <option value="High"><i className="fa-solid fa-flag redFlag"></i>High</option>
                    <option value="Medium"><i className="fa-solid fa-flag orangeFlag"></i>Medium</option>
                    <option value="Low"><i className="fa-solid fa-flag greenFlag"></i>Low</option>
                </select>
            </div>

            <div className="textareaToDo">
                <label htmlFor="notes">Notes</label>
                <textarea
                    id="notes"
                    name="notes"
                    rows="5"
                    cols="33"
                    placeholder="Start typing"
                    value={notes}
                    onChange={handleNotesChange}
                ></textarea>
            </div>

            <Button size="lg" onClick={handleAddToDo}>
                Add to Do
            </Button>
        </div>
    );
}

export default ToDoCreator;

