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
      squares:[
              [[0,0],[0,1],[0,2],[0,3]],
              [[1,0],[1,1],[1,2],[1,3]],
              [[2,0],[2,1],[2,2],[2,3]],
              [[3,0],[3,1],[3,2],[3,3]],
            ],
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
    var empty = this.state.emptySquare;
    var temp = this.state.boxes.slice();
    console.log(empty);
    if(x !== empty[0] && y !== empty[1]){
      console.log('do nothing')
    } else if (y === empty[1]){
      //shift down
      console.log('shift down along x');
      var tempEmpt = temp[empty[0]][y]; 


    

    } else if (x === empty[0]){
      //shift right or left
      console.log('shift across y');
      console.log(temp[x]);
      var tempEmpt = temp[x][empty[1]]; 
      temp[x].splice(empty[1],1);
      temp[x].splice(y, 0, tempEmpt);
      console.log(temp[x]);

    } else {
      console.log('unexpected')




    }
    
    this.setState({boxes: temp, emptySquare: [x,y], });
  }


  shuffleBoxCount(array){
    var i; var temp; var val;
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
        console.log(boxList);
        temp[i][j] = boxList[count];
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
        </div>
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


function shiftLeft(array, index1, index2){
  var newArray = array.slice()
  var arr = array.slice(index1,index2+1);
  var i;
  arr[arr.length-1][1] = index1;
  for(i = 0; i < (index2-index1); i++){
    console.log(arr[i]);
    arr[i][1] +=1
  }
    
  newArray= newArray.slice(0,index1).concat(arr);
  return newArray


}

// function shiftRight(array, index1,index2){
//   var newArray = array.slice();
//   var arr = array.slice(index1,index2+1);
//   arr[0][1] = y;
//   for(i = 0; i < (index2-index1); i++){
//     console.log(arr[i]);
//     arr[i][1] +=1
//   }
    
//   newArray= newArray.slice(0,index1).concat(arr);
//   return newArray


// }



export default Board;
