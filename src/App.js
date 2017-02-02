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
      if(this.props.value === null){
        return (
       <button className="NullBox">
          <div className="Value">{this.props.value}</div>

       </button>
        );
      }
      return (
       <button className="Box">
          <div className="Value" onClick={this.props.onClick}>{this.props.value}</div>
       </button>
      );
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
      box_squares:[
              [[0,0],[0,1],[0,2][0,3]],
              [[1,0],[1,1],[1,2][1,3]],
              [[2,0],[2,1],[2,2][2,3]],
              [[3,0],[3,1],[3,2][3,3]],
            ],
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
    var arr; var temp;
    var tempBox = this.state.boxes;
    console.log(tempBox);
    if(x !== xEmptySquareCoor && y !== yEmptySquareCoor){
      //do nothing
      console.log('no action')
    } else if (x === xEmptySquareCoor && y === yEmptySquareCoor) {
      //do nothing
      console.log('clicked on null')
    } else if (y === yEmptySquareCoor) {
        if (x < xEmptySquareCoor){
          arr = range(x,xEmptySquareCoor).reverse();
        } else {
          arr = range(x,xEmptySquareCoor);
        }
        console.log('arr: ' + arr + ' ' +arr.length)
        for(i=0; i < arr.length-1; i++ ){
          temp = tempBox[arr[i]][y];
          tempBox[arr[i]][y] = tempBox[arr[i+1]][y];
          tempBox[arr[i+1]][y] = temp;
          
        }
        //temporary work around
        this.setState({emptySquare: [x,y], boxes:tempBox});
    } else if (x === xEmptySquareCoor){
        console.log('x aligned')
        if (y < yEmptySquareCoor){
          arr = range(y,yEmptySquareCoor).reverse();
        } else {
          arr = range(y,yEmptySquareCoor);
        }

        for(i=0; i < arr.length-1; i++ ){
          temp = tempBox[x][arr[i]];
          tempBox[x][arr[i+1]] = tempBox[x][arr[i+1]];
          tempBox[x][arr[i+1]] = temp;
        
        } 
            

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
    console.log(boxList);
    boxList.push(null);
    console.log(temp)
    var temp = this.state.boxes;
    for(i=0; i < 4; i++){
      for(j=0; j< 4; j++){
        console.log(temp);
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
    return(
      <div className='Game'>
      <div className="Title">15 Puzzle</div>
      <div className="board">
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[0][0][0],this.state.boxes[0][0][1], this.state.boxes[0][0][2])}
          {this.renderSquare(this.state.boxes[0][1][0],this.state.boxes[0][1][1], this.state.boxes[0][1][2])}
          {this.renderSquare(this.state.boxes[0][2][0],this.state.boxes[0][2][1], this.state.boxes[0][2][2])}
          {this.renderSquare(this.state.boxes[0][3][0],this.state.boxes[0][3][1], this.state.boxes[0][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[1][0][0],this.state.boxes[1][0][1], this.state.boxes[1][0][2])}
          {this.renderSquare(this.state.boxes[1][1][0],this.state.boxes[1][1][1], this.state.boxes[1][1][2])}
          {this.renderSquare(this.state.boxes[1][2][0],this.state.boxes[1][2][1], this.state.boxes[1][2][2])}
          {this.renderSquare(this.state.boxes[1][3][0],this.state.boxes[1][3][1], this.state.boxes[1][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[2][0][0],this.state.boxes[2][0][1], this.state.boxes[2][0][2])}
          {this.renderSquare(this.state.boxes[2][1][0],this.state.boxes[2][1][1], this.state.boxes[2][1][2])}
          {this.renderSquare(this.state.boxes[2][2][0],this.state.boxes[2][2][1], this.state.boxes[2][2][2])}
          {this.renderSquare(this.state.boxes[2][3][0],this.state.boxes[2][3][1], this.state.boxes[2][3][2])}
        </div>
        <div className="gameRow">
          {this.renderSquare(this.state.boxes[3][0][0],this.state.boxes[3][0][1], this.state.boxes[3][0][2])}
          {this.renderSquare(this.state.boxes[3][1][0],this.state.boxes[3][1][1], this.state.boxes[3][1][2])}
          {this.renderSquare(this.state.boxes[3][2][0],this.state.boxes[3][2][1], this.state.boxes[3][2][2])}
          {this.renderSquare(this.state.boxes[3][3][0],this.state.boxes[3][3][1], this.state.boxes[3][3][2])}
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







export default Board;
