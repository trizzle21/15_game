import React from 'react';
import './App.css';

class Square extends React.Component {
  render() {
    return (
      <div className="Square" onClick={this.props.onClick}>
        {this.props.children}
      </div>
    );
  }
}

class Box extends React.Component {
  render() {
    if (this.props.value === 0) {
      return (
        <button className="NullBox">
          <div className="Value">{this.props.value}</div>
        </button>
      );
    }
    return (
      <button className="Box">
        <div className="Value">{this.props.value}</div>
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: [
        [Array(4).fill(null)],
        [Array(4).fill(null)],
        [Array(4).fill(null)],
        [Array(4).fill(null)],
      ],
      emptySquare: [3, 3],
      won: null,
    };
  }

  checkIfWon() {
    var winning = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 0],
    ];
    for (var i = winning.length; i--; ) {
      if (winning[i] !== this.state.boxes[i]) {
        return false;
      }
    }
    return true;
  }

  handleClick(x, y) {
    var empty = this.state.emptySquare;
    var temp = this.state.boxes.slice();
    var i;
    var tempEmpt;
    if (this.checkIfWon()) {
      this.setState({ won: "You've Won" });
    }
    if (x !== empty[0] && y !== empty[1]) {
    } else if (y === empty[1]) {
      //shift down
      tempEmpt = temp[empty[0]][y];
      //check shift direction
      if (empty[0] > x) {
        //shift down
        for (i = empty[0]; i > x; i--) {
          temp[i][y] = temp[i - 1][y];
        }
      } else {
        //shift up
        for (i = empty[0]; i < x; i++) {
          temp[i][y] = temp[i + 1][y];
        }
      }
      temp[x][y] = tempEmpt;
      this.setState({ boxes: temp, emptySquare: [x, y] });
    } else if (x === empty[0]) {
      //shift right or left
      tempEmpt = temp[x][empty[1]];
      temp[x].splice(empty[1], 1);
      temp[x].splice(y, 0, tempEmpt);
      this.setState({ boxes: temp, emptySquare: [x, y] });
    } else {
      //debugging:
      //console.log('unexpected')
    }
  }

  shuffleBoxCount(array) {
    var i;
    var temp;
    var val;
    for (i = 0; i < array.length; i++) {
      val = Math.floor(Math.random() * array.length);
      temp = array[i];
      array[i] = array[val];
      array[val] = temp;
    }
  }

  componentDidMount() {
    var boxList = [...Array(15).keys()].map(function (i) {
      return i + 1;
    });
    var count = 0;
    var i;
    var j;

    this.shuffleBoxCount(boxList);
    boxList.push(0);

    var temp = this.state.boxes.slice();
    for (i = 0; i < 4; i++) {
      for (j = 0; j < 4; j++) {
        temp[i][j] = boxList[count];
        count++;
      }
    }
    this.setState({ boxes: temp });
  }

  renderSquare(x, y, value) {
    return (
      <Square
        xValue={x}
        yValue={y}
        onClick={() => {
          this.handleClick(x, y);
        }}
      >
        <Box value={value} />
      </Square>
    );
  }
  render() {
    return (
      <div className="Game">
        <a href="/projects">Return to Projects</a>
        <div className="Title">15 Puzzle</div>
        <div className="board">
          <div className="gameRow">
            {this.renderSquare(0, 0, this.state.boxes[0][0])}
            {this.renderSquare(0, 1, this.state.boxes[0][1])}
            {this.renderSquare(0, 2, this.state.boxes[0][2])}
            {this.renderSquare(0, 3, this.state.boxes[0][3])}
          </div>
          <div className="gameRow">
            {this.renderSquare(1, 0, this.state.boxes[1][0])}
            {this.renderSquare(1, 1, this.state.boxes[1][1])}
            {this.renderSquare(1, 2, this.state.boxes[1][2])}
            {this.renderSquare(1, 3, this.state.boxes[1][3])}
          </div>
          <div className="gameRow">
            {this.renderSquare(2, 0, this.state.boxes[2][0])}
            {this.renderSquare(2, 1, this.state.boxes[2][1])}
            {this.renderSquare(2, 2, this.state.boxes[2][2])}
            {this.renderSquare(2, 3, this.state.boxes[2][3])}
          </div>
          <div className="gameRow">
            {this.renderSquare(3, 0, this.state.boxes[3][0])}
            {this.renderSquare(3, 1, this.state.boxes[3][1])}
            {this.renderSquare(3, 2, this.state.boxes[3][2])}
            {this.renderSquare(3, 3, this.state.boxes[3][3])}
          </div>
        </div>
        <br />
        <div className="winning">{this.state.won}</div>
      </div>
    );
  }
}

export default Board;
