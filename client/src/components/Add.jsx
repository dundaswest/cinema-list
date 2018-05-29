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
  render() {
    return(
      <div>
        <label>
         Title:
        <input type="text" name="name" onChange={this.handleTitleChange.bind(this)}/>
        </label>
        <label>
         Star:
        <input type="text" name="star" onChange={this.handleStarChange.bind(this)}/>
        </label>
        <button 
          onClick={() => this.props.handleClick(this.state.title)}>Submit</button>
      </div>
    )
  }
}

export default Add;
