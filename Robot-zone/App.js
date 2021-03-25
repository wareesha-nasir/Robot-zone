//import {Dialog,DialogContent} from '@material-ui/core';

import React,{ Component} from 'react';
import Header from './component/header';
import AddUser from './component/form';
class App extends Component{
 state={
      users:[
        {name:"sam",age:"20",phone:"123456",id:1},
        {name:"dam",age:"24",phone:"123456",id:2},
        {name:"pam",age:"23",phone:"123456",id:3}
      ]
    }
  addUser=(user)=>{
console.log(user)
user.id=Math.random();
let users=[...this.state.users,user]
this.setState({
  users:users
})
  }
  deleteUser=(id)=>{
console.log(id)
let users=this.state.users.filter(user=>{
  return user.id!==id
})
this.setState({
  users:users
})
  }

  render(){
    return(
      <div>
        <h2>list if users</h2>
        <div>
        <Header users={this.state.users} deleteUser={this.deleteUser}/>
        </div>
        <AddUser addUser={this.addUser}/>
      </div>
    )
  }
}

export default App;
