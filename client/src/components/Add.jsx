import React from 'react';
import ReactDOM from 'react-dom';


class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title : '',
      star : ''
    }
  }

  handleTitleChange(e) {
    this.setState({title:e.target.value});
  }

  handleStarChange(e) {
    this.setState({star:e.target.value});
  }

  handleClick() {
    this.props.handleClick(this.state.title);
    this.setState({title: '', star: ''});
  }

  render() {
    return(
      <div>
        <label>
         Title:
        <input type="text"
          name="name"
          onChange={this.handleTitleChange.bind(this)}
          value={this.state.title}/>
        </label>
        <label>
         Star:
        <input type="text"
          name="star"
          onChange={this.handleStarChange.bind(this)}
          value={this.state.star}/>
        </label>
        <button 
          onClick={this.handleClick.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default Add;
