import React from 'react';
import './App.css';



class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      box: null, 
    }
  }
  
  render(){
      return (
       <div className="Square">
          {this.props.box}
       </div>
      )
    }
  }

}


class Box extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      xValue:this.props.xValue,
      yValue:this.props.yValue,
    }
  }
  
  render(){
      return (
       <button className="Box">
          <div className="Value">{this.props.value}</div>
       </button>
      )
    }
  }

}



/*
boxes = [
              [Array(4).fill(null)],
              [Array(4).fill(null)],
              [Array(4).fill(null)],
              [Array(4).fill(null)],
            ]
*/

//To move blocks, take clicked box into stack,



class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={
      boxes:[
              [Array(4).fill(null)],
              [Array(4).fill(null)],
              [Array(4).fill(null)],
              [Array(4).fill(null)],
            ],
      emptySquare: [3,3],

      
    }
  }

  handleClick(x,y){
    const xEmptySquareCoor = this.state.emptySquare[0]
    const yEmptySquareCoor = this.state.emptySquare[1]
    if(x != xEmptySquareCoor && y != yEmptySquareCoor){
      //do nothing
    } else if (x === xEmptySquareCoor && y === yEmptySquareCoor) {
      //do nothing
    } else if (y === yEmptySquareCoor) {
        arr = range(x,xEmptySquareCoor);
        for(i=0; i < arr.length; i++ ){
          temp = this.state.boxes[i][y];
          this.state.boxes[i][y] = this.state.boxes[i-1][y];
          this.state.boxes[i-1][y] = temp;
        }
        //temporary work around
        this.state.emptySquare = [x,y];
        this.forceUpdate();
    } else {
        arr = range(y,yEmptySquareCoor);
        for(i=0; i i < arr.length; i++ ){
          temp = this.state.boxes[x][i];
          this.state.boxes[x][i] = this.state.boxes[x][i-1];
          this.state.boxes[x][i-1]; = temp;
        } 
        this.state.emptySquare = [x,y];
        this.forceUpdate();

    }



  }



  shuffleBoxCount(array){
    for(i = 0; i = array.length; i++){
      val = Math.round(Math.random() * i);
      temp = array[i-1];
      array[i-1] = array[j];
      a[val] = temp;
    }
  }

  ComponentWillMount(){
    boxList= [...Array(15).keys()].map(function(i) {return i+1});
    count = 0;
    shuffleBox(boxList);
    boxList.push(null)
    for(i=0; i < 4; i++){
      for(j=0; j< 4; j++){
        this.state.boxes[i][j]= boxList[count];
        count++;
      }
    }
  }
  



  renderSquare(x,y,value){
    return <Square xValue={x} yValue={y}>
              <Box value={value} onClick={this.handleClick(x,y)}/>
            </Square>
  }
  render(){
    return(
      <h3 className="Title">15 Puzzle</h3>
      <div className="board">
        <div className="gameRow">
          {this.renderSquare(0,0, this.state.boxes[0][0])}
          {this.renderSquare(0,1, this.state.boxes[0][1])}
          {this.renderSquare(0,2, this.state.boxes[0][2])}
          {this.renderSquare(0,3, this.state.boxes[0][3])}
        </div>
        <div className="gameRow">
          {this.renderSquare(1,0, this.state.boxes[1][0])}
          {this.renderSquare(1,1, this.state.boxes[1][1])}
          {this.renderSquare(1,2, this.state.boxes[1][2])}
          {this.renderSquare(1,3, this.state.boxes[1][3])}
        <div className="gameRow">
          {this.renderSquare(2,0, this.state.boxes[2][0])}
          {this.renderSquare(2,1, this.state.boxes[2][1])}
          {this.renderSquare(2,2, this.state.boxes[2][2])}
          {this.renderSquare(2,3, this.state.boxes[2][3])}
        </div>
        <div className="gameRow">
          {this.renderSquare(3,0, this.state.boxes[3][0])}
          {this.renderSquare(3,1, this.state.boxes[3][1])}
          {this.renderSquare(3,2, this.state.boxes[3][2])}
          {this.renderSquare(3,3, this.state.boxes[3][3])}
        </div>

    </div>

  )}


}


class Game extends React.Component {


  render() {
    return (
      <div className="game">
        <Board />
      </div>
    );
  }
}





function range(start, end){
  arr = [];
  if(start < end){
    for(i=start; i < end; i++) {
      arr.push(i);
    }
  } else if (start > end) {
    for(i=start; i > end; i--) {
      arr.push(i);
    }
  } else {
      return [start];
  }
    return arr;

}







export default Game;
