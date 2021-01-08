import React, { Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';


class App extends Component {
  constructor() {
    super();
    this.state={
      robots:[],
      searchfield:''
    }    
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {this.setState({robots: users})})
    
  }

  onSearchChange = (e) =>{
    this.setState({searchfield: e.target.value})    
  }

  render(){
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })

    if(this.state.robots.length === 0) {
     return <h1>Looking in PC</h1>
    } else{
      return(
        <div className='tc'>
          <h1>Pokemon</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots}/>
        </div>
        )
    }    
  }
}

export default App;
