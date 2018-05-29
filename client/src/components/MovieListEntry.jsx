import React from 'react';
import ReactDOM from 'react-dom';

class MovieListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
    <div>
    <div>{this.props.movie.title}</div>
    <div>{this.props.movie.release_date}</div>
    <div>{this.props.movie.overview}</div>
    <div>{this.props.movie.vote_average}</div>
    <button onClick={()=>this.props.handleWatcedToggle(this.props.movie.title)}>watched</button>
    </div>
    )
  }
}

export default MovieListEntry;
