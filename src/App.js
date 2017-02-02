import React from 'react';
import './App.css';



class Square extends React.Component {
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <button className="Square">
        {this.props.child}
      </button>
    )
  }

}

class Box extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    <div className="box">
      {this.props.Value}
    </div>
  }
}

/*
boxes = [
  [[0,0],[0,1],[0,2],[0,3]],
  [[1,0],[1,1],[1,2],[1,3]],
  [[2,0],[2,1],[2,2],[2,3]],
  [[3,0],[3,1],[3,2],[3,3]],
]
*/


class Board extends React.Component {
  constructor(props){
    super(props);
    this.state={
      boxes:[
              [[0,0],[0,1],[0,2],[0,3]],
              [[1,0],[1,1],[1,2],[1,3]],
              [[2,0],[2,1],[2,2],[2,3]],
              [[3,0],[3,1],[3,2],[3,3]],
            ]

      
    }
  }


  shuffleBoxCount(array){}
    for(i = 0; i = array.length; i++){
      val = Math.round(Math.random() * i);
      temp = array[i-1];
      array[i-1] = array[j];
      a[val] = temp;
    }
  }

  ComponentWillMount(){
    boxList= [...Array(15).keys()].map(function(i) {return i+1});
    x,y = 0,0;
    shuffleBox(boxList);
    

    while(count < 15){
      this.state.boxes.push({value:boxList[count], square: count})
    }


  }
  renderSquare(x,y){
    return <Square xValue={x} yValue={y}/>
  }
  render(){
    return(
      <div className="board">
        <div className="gameRow">
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
        </div>
        <div className="gameRow">
          {this.renderSquare(5)}
          {this.renderSquare(6,1)}
          {this.renderSquare(7,1)}
          {this.renderSquare(8,1)}
        </div>
        <div className="gameRow">
          {this.renderSquare(9)}
          {this.renderSquare(10)}
          {this.renderSquare(11)}
          {this.renderSquare(12)}
        </div>
        <div className="gameRow">
          {this.renderSquare(13)}
          {this.renderSquare(14}
          {this.renderSquare(15)}
          {this.renderSquare(16)}
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

export default Game;
