import React, { Component } from 'react';
import './App.css'
import Movie from './Movie'

const propTypes = {}
const defaultProps = {}


class App extends Component{


  state = {}

  componentDidMount () {//1
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      console.log(movie)
        return <Movie
          title={movie.title_english}
          poster={movie.medium_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=like_count')
      .then(potato => potato.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }



  render() {//2
    return(
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>

    )
  }
}

App.propTypes = propTypes
App.defaultProps = defaultProps

export default App