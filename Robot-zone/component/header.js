import React from 'react';

const Header=({users,deleteUser})=>{
    //const {users}=props;
    const userList=users.map(user=>{
        return(
        <div className="details" key={user.id}>
        <h4>Name:{user.name}</h4>
        <h4>Age:{user.age}</h4>
        <h4>Phone:{user.phone}</h4>
        <button onClick={()=>{deleteUser(user.id)}}>delete</button>
        </div>
        )
    })
    return(
   <div>
       {userList} 
    </div>
    )
}
export default Header;


