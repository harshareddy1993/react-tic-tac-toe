import React, {Component} from 'react';
import './Square.css';

class Square extends Component {

  render() {
    return(
      <button className="square" onClick={() => this.props.handleSquareClick(this.props.index)}>
        {this.props.owner}
      </button>
    );
  }
}

export default Square;
