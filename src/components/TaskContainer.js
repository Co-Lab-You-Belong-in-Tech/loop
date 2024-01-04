import { useState } from "react";
import HabitContainer from "./HabitContainer";

function TaskContainer() {

    const [eventValue, setEventValue] = useState({});

    const handleClick = () => {
        <input type="text" name="" id="" />
    }

    const handleChange = (e) => {
        setEventValue({ ...eventValue, [e.target.id]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="taskContainer">
            <HabitContainer />
            <p>Add a task, event, or to-do item by tapping “+” down below</p>
            <form onSubmit={handleSubmit}>
                <div className="eventDetail">
                    <label htmlFor="event">Event</label>
                    <input
                        type="text"
                        id="event"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="submitbtn" onClick={handleSubmit}>
                    New Event
                </button>
            </form>
            <ul>

            </ul>
        </div>
    );
}

export default TaskContainer;