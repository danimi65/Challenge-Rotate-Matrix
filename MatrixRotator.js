const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    // do work here
   if(direction === Direction.CW){

   var newMatrix = [];
   for(var i = 0; i < this.matrix.length; i++){
    var newArr = [];
    for(var j = 0; j < this.matrix.length; j++){
      newArr.unshift(this.matrix[j][i]);
    }
      newMatrix.push(newArr);
   }
    this.matrix = newMatrix;
   } 
    
  if(direction === Direction.CCW){ 
  var newMatrix = [];
   for(var i = 0; i < this.matrix.length; i++){
   var newArr = [];
    for(var j = 0; j < this.matrix.length; j++){
      newArr.push(this.matrix[j][i]);
    }
      newMatrix.unshift(newArr);
   }
    this.matrix = newMatrix;
   } 
    // must be a valid Direction, see Direction.js

  }
};
