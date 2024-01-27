import logo2 from '../images/logo2.png';
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/joy';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs from 'dayjs';
import HabitContainer from './HabitContainer';

function Header() {
    const [isCalendarOpen, setCalendarOpen] = useState(false);
    const date = new Date();
    const [selectedDate, setSelectedDate] = useState(dayjs());
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [dayAndMonth, setDayAndMonth] = useState('');

    useEffect(() => {
        const formattedDayOfWeek = selectedDate.format('dddd');
        const formattedDayAndMonth = selectedDate.format('MMMM D');

        setDayOfWeek(formattedDayOfWeek);
        setDayAndMonth(formattedDayAndMonth);
    }, [selectedDate]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        console.log(selectedDate)
    };

    const openCalendar = () => {
        setCalendarOpen(true);
    };

    const closeCalendar = () => {
        setCalendarOpen(false);
    };

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