import React from 'react';
import ReactDOM from 'react-dom';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      input:''
    }
  }
  handleSearchChange(e) {
    this.setState({input:e.target.value});
  }
  render() {
    return(
      <label>
      Search:
     <input type="text" name="name" onChange={this.handleSearchChange.bind(this)}/>
     <button  onClick={() => this.props.handleSearch(this.state.input)}>Search!</button>
     </label>
    )
  }
}

export default Search;
