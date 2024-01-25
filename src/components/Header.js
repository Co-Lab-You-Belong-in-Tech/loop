import logo2 from '../images/logo2.png';
import { useState } from 'react';
import { IconButton } from '@mui/joy';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import HabitContainer from './HabitContainer';

function Header() {
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const date = new Date();
    const optionsDayOfWeek = { weekday: 'long' };
    const optionsDayAndMonth = { day: 'numeric', month: 'long' };
    const [selectedDate, setSelectedDate] = useState(dayjs(new Date()));

    const handleDateChange = (date) => {
        setSelectedDate(date.$d);
        console.log(selectedDate)
    };

    const openCalendar = () => {
        setCalendarOpen(true);
    };

    const closeCalendar = () => {
        setCalendarOpen(false);
    };

    const dayOfWeek = selectedDate.toLocaleDateString(undefined, optionsDayOfWeek);
    const dayAndMonth = selectedDate.toLocaleDateString(undefined, optionsDayAndMonth);

    return (
        <div className="date">
            <img src={logo2} alt="Loop logo" className="loopLogo" />
            <div>
                <h1 className='dayOfWeek'>{dayOfWeek}</h1>
                <h2 className='month'>
                    {dayAndMonth}
                    <IconButton onClick={openCalendar} aria-label="Open calendar">
                        <span className="material-icons">expand_more</span>
                    </IconButton>
                </h2>
                {isCalendarOpen && (
                    <MobileDatePicker
                        defaultValue={dayjs(new Date())}
                        onClose={closeCalendar}
                        onChange={handleDateChange}
                    />
                )}
            </div>
            <HabitContainer />
        </div>
    );
}

export default Header;