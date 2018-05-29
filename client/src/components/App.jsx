import React from 'react';
import ReactDOM from 'react-dom';
import MovieList from './MovieList.jsx';
import Add from './Add.jsx';
import axios from 'axios';

import searchMovies from '../../GetInfo.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list : [],
      added:null,
      watched:false
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  handleSubmit(title) {
    searchMovies(title, (err, data) => {
      if(err) {
        console.error(err);
      } else {
        this.fetchData();
        console.log('handleclick', data);
        this.setState({added:data.title});
      }
    });
    
  }


  fetchData() {
    axios.get('/movie')
    .then((response) => {
      this.setState({list:response.data});
      console.log('hi')
    }).catch(function(error){
      console.error(error);
    })
  }

  handleWatchedFilterBtn() {
    this.setState({watched:!this.state.watched});
  }
  
  handleWatcedToggle(movieTitle){
    let targetMovie = this.state.list.filter((e) => e.title === movieTitle);
    targetMovie[0].watched = !targetMovie[0].watched;
  }

  render() {
    let renderList = this.state.list;
    if(this.state.watched) {
      renderList = this.state.list.filter((e) => e.watched);
    }
    return(
      <div>
      <h1>My Movie List</h1>
      <div>Total:{this.state.list.length}</div>
      <div>Added:{this.state.added}</div>
      <Add handleSubmit={this.handleSubmit.bind(this)}/>
      <div>
      <button onClick={this.handleWatchedFilterBtn.bind(this)}>FilterWatched</button>
      </div>
      <MovieList list={renderList} handleWatcedToggle={this.handleWatcedToggle.bind(this)}/>
      </div>
    )
  }
}

export default App;
