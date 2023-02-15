import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

import Dashboard from './components/dashboard';
import Form from './components/form'

function App() {
  return (
    <div className="App">
     
     
          <Routes>
            <Route exact path="/" element={<Form/>}></Route>
            <Route exact path="/welcome" element={<Dashboard/>}></Route>
          </Routes>
      
   
      </div>
  );
}

export default App;
