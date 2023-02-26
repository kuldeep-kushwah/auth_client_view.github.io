import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';



function Login({setUser}){
    //const[user,setUser]=useState(null);
    
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');
    const navigate=useNavigate();
    
    function login(event){
        event.preventDefault();
       
       const user={
        username:username,
        password:password,
       }
      axios.post('/api/user/login',user)
      .then(res=>{
        
       navigate("/dashboard");
       
       swal({
       
        title:"you have successfully logged in",
        icon:"success",
        
       })

       setUser(true);
       
        //alert(res.data);
       })
      .catch(err=>console.log('there is erron  while connection api in login '+err)) 

      setusername('');
      setpassword('');
    }

    return (
        <div>
          
                 <form >
                 <h4>Login</h4>
                <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/> <br />
                <input type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <br />
                <button onClick={login} className="bt">login</button>
                 </form>
      </div>
    )
}

export default Login;