import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

function TaskCreator() {
    return (
        <div className="taskCreator">
            <h2 className="creatorTitle">Add Task</h2>
            <FormControl>
                <FormLabel>Task Title</FormLabel>
                <Input placeholder="Task title here..." />

                {/* Estimated Time */}
                <FormLabel>Estimated Time</FormLabel>
                <Select
                    placeholder="Select time…"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="5">5 minutes</Option>
                    <Option value="15">15 minutes</Option>
                    <Option value="30">30 minutes</Option>
                    <Option value="45">45 minutes</Option>
                    <Option value="60">1 hour</Option>
                </Select>

                {/* Category Color */}
                <FormLabel>Category Color</FormLabel>
                <Select
                    placeholder="Category Color"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="blue">
                        <i class="fa-solid fa-circle blueCircle"></i>Blue</Option>

                    <Option value="green">
                        <i class="fa-solid fa-circle greenCircle"></i> Green</Option>

                    <Option value="orange"><i class="fa-solid fa-circle orangeCircle"></i>Orange</Option>

                    <Option value="purple"><i class="fa-solid fa-circle purpleCircle"></i>Purple</Option>

                    <Option value="red"><i class="fa-solid fa-circle redCircle"></i>Red</Option>
                </Select>

                {/* Category Type */}
                <FormLabel>Category Type</FormLabel>
                <Select
                    placeholder="Select Category"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="health">Health</Option>
                    <Option value="household">Household</Option>
                    <Option value="childcare">Childcare</Option>
                    <Option value="errands">Errands</Option>
                    <Option value="hobby">Hobby</Option>
                </Select>

                {/* Priority */}
                <FormLabel>Priority</FormLabel>
                <Select
                    placeholder="Select priority…"
                    indicator={<KeyboardArrowDown />}
                    sx={{
                        width: 240,
                        [`& .${selectClasses.indicator}`]: {
                            transition: '0.2s',
                            [`&.${selectClasses.expanded}`]: {
                                transform: 'rotate(-180deg)',
                            },
                        },
                    }}
                >
                    <Option value="High"><i class="fa-solid fa-flag redFlag"></i>High</Option>
                    <Option value="Medium"><i class="fa-solid fa-flag orangeFlag"></i>Medium</Option>
                    <Option value="Low"><i class="fa-solid fa-flag greenFlag"></i>Low</Option>
                </Select>
            </FormControl>
        </div>
    );
}

export default TaskCreator;