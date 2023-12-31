
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
  return (
   
       <div className="App">
        <Router>
          <Routes>
            <Route path='/' element={<Navbar/>}/>
            <Route path='/signup' element={<Signup/>}/>
          </Routes>
          </Router>
        </div>
   
  );
}

export default App;
