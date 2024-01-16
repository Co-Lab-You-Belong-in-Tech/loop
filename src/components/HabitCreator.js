import { useState } from 'react';
import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet'
import { Link } from 'react-router-dom';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import Switch, { switchClasses } from '@mui/joy/Switch';
import dayjs from 'dayjs';

function HabitCreator() {
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [value, setValue] = useState(dayjs());

    const exitHabitCreator = () => {

        setOpen(true);
    };
    return (
        <div className="habitCreatorContainer">
            <h2 className="habitCreatorTitle"></h2>
                <React.Fragment>
                    <Button variant="plain" onClick={() => exitHabitCreator()}>
                        <span class="material-icons">close</span>
                    </Button>
                    <Modal
                        aria-labelledby="Exit Habit Creator "
                        aria-describedby="Exit Habit Creator "
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
                                Exit Habit
                            </Typography>
                            <Typography id="modal-desc" textColor="text.tertiary">
                                Are you sure you want to exit this habit? Your changes will not be saved.
                            </Typography>
                            <Button onClick={() => setOpen(false)} variant="plain">Back</Button>
                            <Button onClick={function () { }} variant="plain"><Link className="linkComponent" to={'/home'} color='red'>Confirm</Link></Button>
                        </Sheet>
                    </Modal>
                </React.Fragment>

            <Tabs aria-label="Routine and Progress tabs" defaultValue={0}>
                <TabList sx={{ backgroundColor: 'white' }}>
                    <Tab sx={{ backgroundColor: 'transparent', '&.Mui-selected': { backgroundColor: 'white' } }} indicatorInset={true}>Routine</Tab>
                    <Tab sx={{ backgroundColor: 'transparent', '&.Mui-selected': { backgroundColor: 'white' } }} indicatorInset={true} >Progress</Tab>
                </TabList>
                <TabPanel value={0} sx={{ backgroundColor: 'white' }}>
                    <div className="habitTitleInputandIcon">
                        <label>Habit Title<span className='required'>*</span></label>
                        <input
                            type="text"
                            placeholder="Habit name here"
                        />
                        <label>Icon<span className='required'>*</span></label>
                        <Button sx={{ backgroundColor: 'white' }}><KeyboardArrowDown sx={{color: 'black'}}  /></Button>
                    </div>

                    <div className="repeats">
                        <fieldset>
                            <legend>Repeats on<span className='required'>*</span></legend>
                            <div>
                                <input type="checkbox" id="monday" name="day" value="monday" />
                                <label htmlForfor="monday">M</label>
                            </div>
                            <div>
                                <input type="checkbox" id="tuesday" name="day" value="tuesday" />
                                <label htmlForfor="tuesday">T</label>
                            </div>
                            <div>
                                <input type="checkbox" id="wednesday" name="day" value="wednesday" />
                                <label htmlForfor="wednesday">W</label>
                            </div>
                            <div>
                                <input type="checkbox" id="thursday" name="day" value="thursday" />
                                <label htmlForfor="thursday">TH</label>
                            </div>
                            <div>
                                <input type="checkbox" id="friday" name="day" value="friday" />
                                <label htmlForfor="friday">F</label>
                            </div>
                            <div>
                                <input type="checkbox" id="saturday" name="day" value="saturday" />
                                <label htmlForfor="saturday">SA</label>
                            </div>
                            <div>
                                <input type="checkbox" id="sunday" name="day" value="sunday" />
                                <label htmlForfor="sunday">SU</label>
                            </div>
                        </fieldset>
                    </div>

                    <div className="startDate">
                        <label htmlFor="startDatePicker">Start Date<span className='required'>*</span></label>
                        <MobileDatePicker name='startDatePicker' />
                    </div>

                    <div className="reminderTime">
                        <label htmlFor="reminderTime">Set Reminder<span className='required'>*</span></label>
                        <Switch
                            name ="reminderTime"
                            checked={checked}
                            onChange={(event) => setChecked(event.target.checked)}
                            sx={(theme) => ({
                                '--Switch-thumbSize': '16px',
                                '--Switch-trackWidth': '34px',
                                '--Switch-trackHeight': '20px',
                                '--Switch-trackBackground': '#CBD5E0',
                                '&:hover': {
                                    '--Switch-trackBackground': '#CBD5E0',
                                },
                                [`&.${switchClasses.checked}`]: {
                                    '--Switch-trackBackground': '#3182ce',
                                    '&:hover': {
                                        '--Switch-trackBackground': '#3182ce',
                                    },
                                    [`&.${switchClasses.disabled}`]: {
                                        '--Switch-trackBackground': '#3182ce',
                                    },
                                },
                                [`&.${switchClasses.disabled}`]: {
                                    '--Switch-trackBackground': '#CBD5E0',
                                    opacity: 0.4,
                                },
                                [theme.getColorSchemeSelector('dark')]: {
                                    '--Switch-trackBackground': 'rgba(255, 255, 255, 0.24)',
                                    [`&.${switchClasses.checked}`]: {
                                        '--Switch-trackBackground': '#90cdf4',
                                        '&:hover': {
                                            '--Switch-trackBackground': '#90cdf4',
                                        },
                                        [`&.${switchClasses.disabled}`]: {
                                            '--Switch-trackBackground': '#3182ce',
                                        },
                                    },
                                },
                            })}
                        />
                        {checked && <MobileTimePicker 
                        views={['hours', 'minutes']} 
                        format="HH:MM"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}/>}
                    </div>
                </TabPanel>
                <TabPanel value={1} sx={{ backgroundColor: 'white' }}>
                    <p>progress stuff in here</p>
                </TabPanel>
            </Tabs>
            <button className="addHabitButtonCreator">Add Habit</button>
        </div>
    );
}

export default HabitCreator;