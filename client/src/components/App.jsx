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
      input:''
    }
  }
  componentDidMount() {
    this.fetchData();
  }
  handleClick(title) {
    searchMovies(title, (err, data) => {
      if(err) {
        console.log(err);
      } else {
        console.log('handleclick', data);
        //this.setState({list:this.state.list.concat(data)})
      }
    });
    this.handleSubmit(title); 
  }

  handleSubmit(movie) {
    axios.post('/', movie)
    .then((response) => {
      this.fetchData();
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  fetchData() {
    axios.get('/movie')
    .then((response) => {
      this.setState({list:response.data});
    }).catch(function(error){
      console.log(error);
    })
  }



  render() {
    return(
      <div>
      <h1>My Movie List</h1>
      <div>Total:{this.state.list.length}</div>
      <Add handleClick={this.handleClick.bind(this)}/>
      <div>
      </div>
      <MovieList list={this.state.list}/>
      </div>
    )
  }
}

export default App;
