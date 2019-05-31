import React, { Component } from 'react';
import './Movie.css'
import PropTypes from 'prop-types'


const propTypes = {
  title: PropTypes.string,
  poster: PropTypes.string,
}
const defaultProps = {}


class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const {genres, synopsis, title} = this.props
    return(
      <div className="Movie">
        <div className="Movie_columns">
          <img src={this.props.poster} alt={title}/>
        </div>
        <div className="Movie_columns">
          <h1>{this.props.title}</h1>
          <div className="Movie_genres">
            {genres.map((genre, index) => {
              return <span className="Movie_genre" key={index}>{genre} </span>
             })}
          </div>
          <p className="Movie_synopsis">{synopsis}</p>
        </div>
      </div>
    )
  }
}

Movie.propTypes = propTypes
Movie.defaultProps = defaultProps

export default Movie