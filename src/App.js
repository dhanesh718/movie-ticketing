import React, { Component } from 'react';
import CardList from './components/CardList';
import './App.css';
import SearchBox from './components/SearchBox';
import Navigation from './components/Navigation';
import Register from './components/Register';
import Scroll from './components/Scroll';
import Signin from './components/Signin'
import apiKeys from './apiKeys'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchfield: '',
      route: 'signin',
      isSignedIn: false
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

  onRouteChange = (route) => {
    if(route==='signout'){
      this.setState({isSignedIn: false})
    }
    else if(route==='home'){
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const {isSignedIn, route, searchfield, movies} = this.state;

    const filteredMovies = movies.filter(movies => {
      return movies.title.toLowerCase().includes(searchfield.toLowerCase());
    })
    
    return (
      <div>
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
        { route === 'home' ? 
          <div className='tc'>
            <div className='outsideScroll'>
              <h1 id='nowplaying' className='f1'>Now Playing: </h1>
              <SearchBox searchChange={this.onSearchChange}/>
            </div>
            <Scroll>
              <CardList movies={filteredMovies}/>
            </Scroll>
          </div>
          : (
              route === 'signin' ?
              <Signin onRouteChange={this.onRouteChange}/>
              :
              <Register onRouteChange={this.onRouteChange} />
            )
          
        }
      </div>
    );
  }
}

export default App;


    