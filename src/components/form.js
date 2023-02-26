
import './../App.css';
import Login from './login';
import Register from './register';
import form_img from './../img/form_img.png';

function Form({setUser}){
 // console.log((__dirname+"/../img"));
  return (
    <div className="App">
     
    <h1>Auth</h1>
     <div className="form">
        <div className="form_div">
        <img src={form_img} alt="" className="form_img" />
        </div>
     
      
      <div>
         <div className="register">
          <Register/>
         </div>
         <div className="login">
          <Login setUser={setUser}/>
         </div>
      </div>
      </div>
      
    </div>
  );
}

export default Form;


{/* <div>
        <img src={form_img} alt="" className="form_img" />
      </div>
      <div>
         <div className="register">
          <Register/>
         </div>
         <div className="login">
          <Login setUser={setUser}/>
         </div>
      </div> */}