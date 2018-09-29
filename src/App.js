import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import apiKeys from './apiKeys'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKeys[0].movieKey}`)
      .then(response => {return response.json()})
      .then(movies => this.setState({movies: movies.results}))
  }

  onSearchChange = (event) => {
   this.setState({searchfield: event.target.value})
    
  }

  render() {
    const filteredMovies = this.state.movies.filter(movies => {
      return movies.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
      <div className='tc'>
        <h1 className='f1'>Now Playing: </h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList movies={filteredMovies}/>
        </Scroll>
      </div>
    );
  }
}

export default App;
