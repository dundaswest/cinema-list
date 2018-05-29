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
      added:null
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



  render() {
    return(
      <div>
      <h1>My Movie List</h1>
      <div>Total:{this.state.list.length}</div>
      <div>Added:{this.state.added}</div>
      <Add handleSubmit={this.handleSubmit.bind(this)}/>
      <div>
      </div>
      <MovieList list={this.state.list}/>
      </div>
    )
  }
}

export default App;
