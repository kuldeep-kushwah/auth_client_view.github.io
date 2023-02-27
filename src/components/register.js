import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

import axios from 'axios';

function Register({setRegister}){
    const[name,setname]=useState('');
    const[username,setusername]=useState('');
    const[password,setpassword]=useState('');

    function register(event){
        event.preventDefault();
        if(username=='' || name=='' || password=='')
        {
          alert('input can not be blank!');
          return;
        }
        
       const user={
        name:name,
        username:username,
        password:password,
       }
      
      axios.post('/api/user/register',user)
      .then(res=>{


        if(res.data=="user already exist!")
        swal({
          title:"User already exist!",
          icon:"warning",
         })
         else
        swal({
          title:"you have been successfully registeredhena!",
          icon:"success",
         })
      
        setRegister(false);
         //window.open("http://localhost:3000/","_self");

      })
      .catch(err=>console.log('there is erron while connection api '+err)) 

      setname('');
      setusername('');
      setpassword('');

    }

    return (
        <div>
            
           
                <form onSubmit={register}>
                  <h4>Register</h4>
                <input type="text" placeholder='name' value={name} onChange={(e)=>{setname(e.target.value)}}/> <br />
                <input type="text" placeholder='username' value={username} onChange={(e)=>{setusername(e.target.value)}}/> <br />
                <input type="text" placeholder='password' value={password} onChange={(e)=>{setpassword(e.target.value)}}/> <br />
               <button className="submit bt" onClick={register}>submit</button>
                 </form>
      </div>
    )
}

export default Register;