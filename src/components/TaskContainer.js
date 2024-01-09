import { useState } from "react";
import HabitContainer from "./HabitContainer";

function TaskContainer() {


    return (
        <div className="taskContainer">
            <HabitContainer />
            <p>Add a task, event, or to-do item by tapping “+” down below</p>

            <ul>

            </ul>
        </div>
    );
}

export default TaskContainer;