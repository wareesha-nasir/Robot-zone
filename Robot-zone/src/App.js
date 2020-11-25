import React , {Component} from 'react';
//import logo from './logo.svg';
import {CardList} from './Component/card-list/card-list.jsx';
import {SearchBox} from './Component/search-box/search.jsx';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      movie:[],
      searchField:''
    };
  }
  
  componentDidMount(){
   fetch("./data.json")
    .then(response => response.json())
  .then(name=>this.setState({movie: name}));
 } //arrow function automatically bind this to curent context we don not have to explicitly have to do it
 handleChange=(e)=>{
this.setState({searchField:e.target.value})
 }

  render(){
    const {movie, searchField} = this.state;  //destructuring
    const filteredMovie= movie.filter(movies => movies.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return(
      <div className="App">
        <h1>Robot-Zones</h1>
      
        <SearchBox placeholder="search robots...." handleChange={e=>this.setState({searchField:e.target.value})}/>
        <CardList movie={filteredMovie}/>
        <br></br>
        
       </div>
      );
  }
}
export default App;



