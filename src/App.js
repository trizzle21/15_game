import React from 'react';
import './App.css';



class Square extends React.Component {
  constructor(props){
    super(props);
    this.state={
      xValue:this.props.xValue,
      yValue:this.props.yValue,
    }
  }
  
  render(){
      return (
       <div className="Square">
          {this.props.children}
       </div>
      );
    }
}




class Box extends React.Component {
  render(){
      if(this.props.value === 0){
        return (
       <button className="NullBox">
         <div className="Value" onClick={this.props.onClick}>{this.props.value}</div>

       </button>
        );
      } else {
        return (
        <button className="Box">
           <div className="Value" onClick={this.props.onClick}>{this.props.value}</div>
         </button>
        );
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
              [[0,0],[0,1],[0,2],[0,3]],
              [[1,0],[1,1],[1,2],[1,3]],
              [[2,0],[2,1],[2,2],[2,3]],
              [[3,0],[3,1],[3,2],[3,3]],
            ],
      emptySquare: [3,3],

      
    }
  }

  handleClick(x,y){
    var xEmptySquareCoor = this.state.emptySquare[0]
    var yEmptySquareCoor = this.state.emptySquare[1]
    console.log('coord ' + yEmptySquareCoor +  ' ' + xEmptySquareCoor);
    console.log('coord ' + y +  ' ' + x);
    var i;
    var arr; 
    var tempBox= this.state.boxes.slice();
    if(x !== xEmptySquareCoor && y !== yEmptySquareCoor){
      //do nothing
      console.log('no action')
    } else if (x === xEmptySquareCoor && y === yEmptySquareCoor) {
      //do nothing
      console.log('clicked on 0')
    } else if (y === yEmptySquareCoor) {
        console.log('y')
        console.log(tempBox);
        arr = range(xEmptySquareCoor,x);
        for(i=0; i < arr.length-1; i++ ){
        }
        console.log(tempBox);
        //temporary work around
        this.setState({emptySquare: [x,y], boxes:tempBox});
    } else if (x === xEmptySquareCoor){
        if(y < yEmptySquareCoor) {
          //shift right
          tempBox[x] = ShiftRight(tempBox, y, yEmptySquareCoor);
        } else {
          tempBox[x] = ShiftLeft(tempBox, yEmptySquareCoor, y);
        }
        this.setState({emptySquare: [x,y], boxes:tempBox});        
      }



  }


  shuffleBoxCount(array){
    var i; var temp;var val;
    for(i = 0; i < array.length; i++){
      val = Math.floor(Math.random() * array.length);
      temp = array[i];
      array[i] = array[val];
      array[val] = temp;
    }
  }

  componentWillMount(){
    var boxList= [...Array(15).keys()].map(function(i) {return i+1});
    var count = 0;
    var i; var j;
    

    this.shuffleBoxCount(boxList);
    boxList.push(0);
    var temp = this.state.boxes.slice();
    
    for(i=0; i < 4; i++){
      for(j=0; j< 4; j++){
        temp[i][j].push(boxList[count]);
        count++;
      }
    }
    this.setState({boxes:temp})
  }
  

//this.handleClick(x,y) 

  renderSquare(x,y,value){
    return (<Square xValue={x} yValue={y} >
              <Box value={value} onClick={() => { this.handleClick(x,y)  } }/>
            </Square>
            );
  }
  render(){
    console.log(this.state.boxes[3][3][2]);
    return(
      <div className='Game'>
      <div className="Title">15 Puzzle</div>
      <div className="board">
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[0][0][0], this.state.boxes[0][0][1], this.state.boxes[0][0][2])}
          {this.renderSquare(this.state.boxes[0][1][0], this.state.boxes[0][1][1], this.state.boxes[0][1][2])}
          {this.renderSquare(this.state.boxes[0][2][0], this.state.boxes[0][2][1], this.state.boxes[0][2][2])}
          {this.renderSquare(this.state.boxes[0][3][0], this.state.boxes[0][3][1], this.state.boxes[0][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[1][0][0], this.state.boxes[1][0][1], this.state.boxes[1][0][2])}
          {this.renderSquare(this.state.boxes[1][1][0], this.state.boxes[1][1][1], this.state.boxes[1][1][2])}
          {this.renderSquare(this.state.boxes[1][2][0], this.state.boxes[1][2][1], this.state.boxes[1][2][2])}
          {this.renderSquare(this.state.boxes[1][3][0], this.state.boxes[1][3][1], this.state.boxes[1][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[2][0][0], this.state.boxes[2][0][1], this.state.boxes[2][0][2])}
          {this.renderSquare(this.state.boxes[2][1][0], this.state.boxes[2][1][1], this.state.boxes[2][1][2])}
          {this.renderSquare(this.state.boxes[2][2][0], this.state.boxes[2][2][1], this.state.boxes[2][2][2])}
          {this.renderSquare(this.state.boxes[2][3][0], this.state.boxes[2][3][1], this.state.boxes[2][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[3][0][0], this.state.boxes[3][0][1], this.state.boxes[3][0][2])}
          {this.renderSquare(this.state.boxes[3][1][0], this.state.boxes[3][1][1], this.state.boxes[3][1][2])}
          {this.renderSquare(this.state.boxes[3][2][0], this.state.boxes[3][2][1], this.state.boxes[3][2][2])}
          {this.renderSquare(this.state.boxes[3][3][0], this.state.boxes[3][3][1], this.state.boxes[3][3][2])}
        </div>

    </div>
    </div>

  )}


}







function range(start, end){
  var arr = [];
  var i;
  if(start < end){
    for(i= start; i <= end; i++) {
      arr.push(i);
    }
  } else if (start > end) {
    for(i=start; i >= end; i--) {
      arr.push(i);
    }
  } else {
      return [start];
  }
    return arr;

}


function ShiftRight(array, index1, index2){
  var newArray;
  var subArray = array.slice(index1,index2);
  subArray.unshift(subArray.pop());
  newArray = array.slice(0,index1).concat(subArray);
  return newArray;
}
function ShiftLeft(array, index1, index2){
  var newArray;
  var subArray = array.slice(index1,index2);
  subArray.push(subArray.shift())
  newArray = array.slice(0,index1).concat(subArray);
  return newArray;
}

export default Board;
