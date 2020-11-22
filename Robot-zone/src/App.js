import React , {Component} from 'react';
//import logo from './logo.svg';
import {CardList} from './Component/card-list/card-list.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      movie:[]
    };
  }
  
  componentDidMount(){
   fetch("./data.json")
    .then(response => response.json())
  .then(name=>this.setState({movie: name}));
 }
  render(){
    return(
      <div className="App">
        <CardList movie={this.state.movie}/>
       </div>
      
    );
  }
}

export default App;



