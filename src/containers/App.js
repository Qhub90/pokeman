import React, { Component } from 'react';
import './App.css';
import HomePage from '../components/HomePage';
import SearchBox from '../components/SearchBox';
import Card from '../components/Card';


class App extends Component {
  constructor() {
    super();
    this.state={
      pokemon:[],
      searchfield:''
    }    
  }

  // componentDidMount() {
  //   fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  //     .then(res => res.json())
  //     .then(users =>  {this.setState({pokedex: users.results})})
    
  // }

  onSearchChange = e => {
    e.preventDefault();
    //   const text = document.getElementById('pkmnSearch');
    //   this.setState({searchfield: text.value});
    fetch(`https://pokeapi.co/api/v2/pokemon/butterfree`)
    .then(res => res.json())
    .then(data => this.setState({pokemon: data}))
  }

  render(){
    

    if (this.state.pokemon.length === 0){
      return(
        <div>
          <HomePage searchChange={this.onSearchChange}/>
        </div>
      )         
      
    }else{
      return(
        <div className='tc'>
          <h1>Pokemon</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Card 
           name={this.state.pokemon.name}
           height={this.state.pokemon.height}
           weight={this.state.pokemon.weight}
           types={this.state.pokemon.types}
           img={this.state.pokemon.sprites.other.dream_world.front_default}        
          />
        </div>
        )
      }   
  }
}

export default App;
