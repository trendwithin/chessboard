function ChessBoard() {
  this.rank = 8;
  this.file = 8;

  this.create_board = new Array(this.rank);
  for ( i = 0; i < this.rank; i++ ){
    this.create_board[i] = new Array(this.file);
  }
};

ChessBoard.prototype.setPiece = function(name){
  if (name.name == "pawn"){
    for (i=0; i < this.rank; i++){
      this.create_board[1][i] = "pawn";
    }
    for (i=0; i < this.rank; i++ ){
      this.create_board[6][i] = "pawn";
    }
  }
  else if (name.name == "rook") {
    this.create_board[0][0,0] = "rook";
    this.create_board[0][0,7] = "rook";
    this.create_board[7][7,7] = "rook";
    this.create_board[7][7,0] = "rook";
  }
  else if (name.name == "knight") {
    this.create_board [0][0,1] = "knight";
    this.create_board [0][0,6] = "knight";
    this.create_board [7][7,1] = "knight";
    this.create_board [7][7,6] = "knight";
  }
  else if (name.name == "bishop") {
    this.create_board [0][0,2] = "bishop";
    this.create_board [0][0,5] = "bishop";
    this.create_board [7][7,2] = "bishop";
    this.create_board [7][7,5] = "bishop";
  }
  else if (name.name == "queen") {
    this.create_board[0][0,3] = "queen";
    this.create_board[7][7,3] = "queen";
  }
  else{
    this.create_board [0][0,4] = "king";
    this.create_board [7][7,4] = "king";
  }
};
module.exports = ChessBoard;
