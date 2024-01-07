import './App.css';
import Home from './components/Home'
import { Link, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import NameInput from './components/NameInput';
import AddTaskMenu from './components/AddTaskMenu';

function App() {
    
    return (
        <>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/home" element={<Home />} />
                <Route path="/addtaskmenu" element={<AddTaskMenu />} />
                <Route path="/name" element ={<NameInput />} />
            </Routes>
        </>
    );
}

export default App;
