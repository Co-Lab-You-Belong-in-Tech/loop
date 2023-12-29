
import './App.css';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Signup from './Components/Signup';

function App() {
  return (
   <Router>
       <div className="App">
          <Navbar/>
          <Switch>
            <Route path='/' exact>
              <Home/>
            </Route>
            <Route path='/signup' exact>
              <Signup/>
            </Route>
          </Switch>
        </div>
   </Router>
  );
}

export default App;
