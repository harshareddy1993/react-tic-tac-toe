import React, {Component} from 'react';
import Square from './Square';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      player: 'X',
      status: Array(9).fill(null)
    }
  }

  handleSquareClick = i => {
    let {status} = this.state;
    if (this.calculateWinner(status) || status[i]) {
      return;
    }
    status[i] = this.state.player;
    const nextPlayer = this.state.player === 'X' ? 'O' : 'X';
    this.setState({
      player: nextPlayer,
      status: status
    });
  }

  calculateWinner = (status) => {
    const winningPositions = [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [3,4,5],
      [6,7,8],
      [2,4,6]
    ];

    for (var i = 0; i < winningPositions.length; i++) {
      let [a,b,c] = winningPositions[i];
      if (status[a] && status[a] === status[b] && status[a] === status[c]) {
        return status[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.status);
    let status = 'Next Player : '+this.state.player;
    if (winner) {
      status = winner+' has won!';
    }
    return(
      <div className = 'row'>
        <div className = 'container game'>
          <h4>{status}</h4>
          <div className = 'game-row'>
            <Square index={0} owner={this.state.status[0]} handleSquareClick={this.handleSquareClick}/>
            <Square index={1} owner={this.state.status[1]} handleSquareClick={this.handleSquareClick}/>
            <Square index={2} owner={this.state.status[2]} handleSquareClick={this.handleSquareClick}/>
          </div>

          <div className = 'game-row'>
            <Square index={3} owner={this.state.status[3]} handleSquareClick={this.handleSquareClick}/>
            <Square index={4} owner={this.state.status[4]} handleSquareClick={this.handleSquareClick}/>
            <Square index={5} owner={this.state.status[5]} handleSquareClick={this.handleSquareClick}/>
          </div>

          <div className = 'game-row'>
            <Square index={6} owner={this.state.status[6]} handleSquareClick={this.handleSquareClick}/>
            <Square index={7} owner={this.state.status[7]} handleSquareClick={this.handleSquareClick}/>
            <Square index={8} owner={this.state.status[8]} handleSquareClick={this.handleSquareClick}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
