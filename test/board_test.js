module.paths.push('/usr/local/libs/node_modules');
var expect = require('chai').expect;
var ChessBoard = require('../lib/chessBoard.js');
var Piece = require('../lib/piece.js');

describe ('Board', function() {

  var board = new ChessBoard();

  it (' should be an 8x8 grid with rows of 8', function(){
    var cb = board.create_board;
    expect(cb[0]).to.have.length(8);
    expect(cb[7]).to.have.length(8);
    expect(cb[8]).to.be.undefined;
  })
});

describe ('Pieces', function() {
  var board = new ChessBoard();
  var cb = board.create_board;
  var pawn = new Piece();
  pawn.setName("pawn");
  var rook = new Piece();
  rook.setName ("rook");
  var knight = new Piece();
  knight.setName ("knight");
  var bishop = new Piece();
  bishop.setName ("bishop");
  var king = new Piece();
  king.setName ("king");
  var queen = new Piece();
  queen.setName ("queen");


  it ( 'should be named Pawn', function() {
    expect(pawn).to.have.property('name').that.equals("pawn");
  })

  it ('should have value of 1', function() {
    pawn.setValue("pawn");
    expect(pawn).to.have.property('value').that.equals(1);
  })

  it ('should have a pawn occupy rank[1]file[0]', function() {
    board.setPiece(pawn);
    test_val = cb[1][0,1];
    expect(test_val).to.eql('pawn');
  })

  it ('should have a pawn occupy rank[6],file[7]', function() {
    test_val = cb[1][6,7];
    expect(test_val).to.eql('pawn');
  })

  it ('should have a rook occupy rank[0],file[0]', function() {
    board.setPiece(rook);
    expect(cb[7][7,7]).to.eql('rook');
  })

  it ('should have knights', function() {
    board.setPiece(knight);
    expect(cb[7][7,1]).to.eql('knight');
    expect(cb[0][0,1]).to.eql('knight');
  })
  it ('should have bishops', function() {
    board.setPiece(bishop);
    expect(cb[7][7,5]).to.eql('bishop');
    expect(cb[0][0,2]).to.eql('bishop');
  })

  it ('should have queens', function() {
    board.setPiece(queen);
    expect(cb[7][7,3]).to.eql('queen');
    expect(cb[0][0,3]).to.eql('queen');
  })
  it ('should have kings', function() {
    board.setPiece(king);
    expect(cb[7][7,4]).to.eql('king');
    expect(cb[0][0,4]).to.eql('king');

  })
});
