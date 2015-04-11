function Piece() {
  this.name;
  this.value;
};

Piece.prototype.setName = function(name){
  this.name = name;
};

Piece.prototype.setValue = function(name){
  if ( name == "king"){
    return this.value = "undefined";
  }
  var piece_value = {
    "pawn":   1,
    "knight": 3,
    "bishop": 3,
    "rook":   5,
    "queen":  9
  }

  for (name in piece_value){
   return this.value = piece_value[name];
  }

};
module.exports = Piece;
