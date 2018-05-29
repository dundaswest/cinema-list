import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Add from './Add.jsx';
import axios from 'axios';

import searchMovies from '../../GetMovieInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      lastAddedMovie: { title: 'none' }
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  handleClick(title) {
    const onSuccess = newMovie => {
      this._postMovie(newMovie);
      this.setState({lastAddedMovie: newMovie});
    };

    const onFailure = error => {
      console.log(error);
    }

    searchMovies(title, onSuccess, onFailure);
  }

  handleSubmit(movie) {
  }

  _postMovie(newMovie) {
    axios.post('/movie', newMovie)
      .then(() => {
        this.fetchData();
      }).catch(error => {
        console.log(error);
      });
  }

  fetchData() {
    // grab movies from the database based on the parameters
    axios.get('/movie')
      .then(response => {
        this.setState({list: response.data});
      }).catch(function(error){
        console.log(error);
    });
  }



  render() {
    return(
      <div>
        <h1>My Movie List</h1>
        <div>Total:{this.state.list.length}</div>
        <h2 className="last-added-movie">Last added movie: {this.state.lastAddedMovie.title}</h2>
        <Add handleClick={this.handleClick.bind(this)}/>
        <div>
        </div>
        <MovieList list={this.state.list}/>
      </div>
    )
  }
}

export default App;
