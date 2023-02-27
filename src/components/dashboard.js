import React from 'react';
import Navbar from "./navbar";
function Dashboard({user}){
    return (
        <div>
          <Navbar user={user}/>
        
      </div>
    )
}
export default Dashboard;