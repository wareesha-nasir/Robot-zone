
import React,{ Component} from 'react';


class AddUser extends Component{
        state={
            name:"",
            age:"",
            phone:""
        }
    
    handleChange=(e)=>{
        this.setState(
      {
          [e.target.id]:e.target.value,
         
          //[e.target.id]:e.target.value
      }
  )
         }
    handleSubmit=(e)=>{
        e.preventDefault()
 //console.log(this.state)
 this.props.addUser(this.state)
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name"></label>
                    <input type="text" placeholder="enter name" id="name" 
                    onChange={this.handleChange}/>
                    <label htmlFor="age"></label>
                    <input type="number" placeholder="enter age" id="age" 
                     onChange={this.handleChange}/>
                    <label htmlFor="phone"></label>
                    <input type="number" placeholder="enter phone number" id="phone" 
                     onChange={this.handleChange}/>
                     <button>submit</button>
                </form>
            </div>
        )
    }
}
export default AddUser;