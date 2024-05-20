import React from 'react';
import './chessboard.css'; // Import CSS file for styling

class Chessbord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: this.initializeBoard()
    };
  }

  initializeBoard() {
    // Create an 8x8 array representing the chessboard
    const board = Array(8).fill(null).map(() => Array(8).fill(null));

    // Set up the initial positions of pieces
    // For simplicity, using placeholders for pieces
    board[0] = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
    board[1] = Array(8).fill('♟');
    board[6] = Array(8).fill('♙');
    board[7] = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

    console.log("board",board);
    return board;
  }

  render() {
    return (
      <div className="chessboard">
        {this.state.board.map((row, rowIndex) => (
          <div key={rowIndex} className="row">
            {row.map((piece, colIndex) => (
              <div key={colIndex} className={(rowIndex + colIndex) % 2 === 0 ? 'white-tile' : 'black-tile'}>
                {piece}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Chessbord;
