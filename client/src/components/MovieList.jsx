import React from 'react';
import ReactDOM from 'react-dom';
import MovieListEntry from './MovieListEntry.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
     <div>
       {this.props.list.map((movie,index) => {
        return (
        <div key = {index}>
        <MovieListEntry movie={movie} handleWatcedToggle={this.props.handleWatcedToggle}/>
        </div>
        )
       })}
    </div>
    )
  }
}

export default MovieList;
