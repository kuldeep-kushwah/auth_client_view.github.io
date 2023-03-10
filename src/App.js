import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Routes,Route,Link,useNavigate,Navigate} from 'react-router-dom';
import Register from './components/register';
import Login from './components/login';

import Dashboard from './components/dashboard';
import Form from './components/form'

function App() {
  const navigate=useNavigate();

  const [user,setUser]=useState(false);
  console.log(user);
  return (
    <div className="App">
           
          
          <Routes>
            <Route exact path="/login" element={<Form setUser={setUser} />}></Route>
            <Route exact path="/" element={<Dashboard user={user}/>}></Route>
          </Routes>
      
     
      </div>
  );
}

export default App;
