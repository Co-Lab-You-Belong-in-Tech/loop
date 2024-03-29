import './App.css';
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import NameInput from './components/NameInput';
import AddTaskMenu from './components/AddTaskMenu';
import TaskCreator from './components/TaskCreator';
import ToDoCreator from './components/ToDoCreator';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddHabitMenu from './components/AddHabitMenu';
import HabitCreator from './components/HabitCreator';

function App() {
    
    return (
        <>    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Routes>
                    <Route path="/" element={<Welcome />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/addtaskmenu" element={<AddTaskMenu />} />
                    <Route path="/name" element={<NameInput />} />
                    <Route path='/taskcreator' element={<TaskCreator />} />
                    <Route path="/todocreator" element={<ToDoCreator />} />
                    <Route path="/addhabitmenu" element={<AddHabitMenu />} />
                    <Route path="/habitcreator" element={<HabitCreator />} />
                </Routes>
        </LocalizationProvider>
        </>
    );
}

export default App;
