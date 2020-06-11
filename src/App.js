import React,{Component} from 'react';

import CardList from './components/card-list/card-list.component' 
import {SearchBox} from './components/search-field/search-box.component'

import './App.css';
 
class App extends Component {
  constructor() {
    super() 
      this.state = {
        monster : [],
        searcField : ''
      
      
    }
     
  }
  handleChange = e => {this.setState({searcField : e.target.value })}
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(users => this.setState({monster : users}))
  }
  render() {
    const {monster,searcField} = this.state;
    const filteredMonsters = monster.filter(monster => 
      monster.name.toLowerCase().includes(searcField.toLowerCase())
    )
    return (
      <div className="App">
      <h1>Monster Rodlex</h1>
      <SearchBox placeholder="Search Monster"  handleChange={this.handleChange}/>

   
      <CardList monster={filteredMonsters}>
     
      </CardList>
       

    </div>
    )
  }
}


export default App;
