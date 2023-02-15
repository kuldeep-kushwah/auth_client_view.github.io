
import './../App.css';
import Login from './login';
import Register from './register';

function Form() {
  return (
    <div className="App">
     
     <h1 >Auth</h1>
      
     <div className='row row1'>
         <div className="col-md-4 sec1">
          <Register/>
         </div>
         <div className="col-md-4 sec1">
          <Login/>
         </div>
      </div>

      
     
    </div>
  );
}

export default Form;
