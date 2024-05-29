import React, { useState } from 'react';
import './SudokuGrid.css';

const SudokuGrid = ({ initialGrid }) => {
  const [grid, setGrid] = useState(initialGrid);
  const [selectedBox, setSelectedBox] = useState(null);

  const isValidMove = (row, col, value) => {
    // Check row
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === value && i !== col) {
        return false;
      }
    }
console.log(grid);
{/*
(9) [1, '2', 3, '', '', '6', 7, 8, 9]
1
: 
(9) ['', '', 6, 7, '', '', '1', 2, 3]
2
: 
(9) [7, 8, '', '3', 2, '1', 4, '5', 6]
3
: 
(9) [2, '', 4, '', 6, '7', '8', 9, '1']
4
: 
(9) ['', 6, 7, 8, '', '', '2', '3', 4]
5
: 
(9) [8, '', '', '2', '', '', 5, 6, 7]
6
: 
(9) ['', '', 5, 6, '7', '', '', 1, '2']
7
: 
(9) [6, 7, '', '', '', 2, '', '4', 5]
8
: 
(9) ['', '', '2', '', '', 5, 6, '7', '8'] */}
    // Check column
    for (let i = 0; i < 9; i++) {
      if (grid[i][col] === value && i !== row) {
        return false;
      }
    }

    // Check 3x3 box
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (grid[i][j] === value && (i !== row || j !== col)) {
          return false;
        }
      }
    }

    return true;
  };


  const handleChange = (e, row, col) => {
    const value = e.target.value.trim(); // Trim whitespace
    if (value === "." || (!isNaN(value) && value >= 1 && value <= 9 && isValidMove(row, col, parseInt(value)))) {
      const updatedGrid = grid.map((r, i) =>
        i === row
          ? r.map((cell, j) => (j === col ? value : cell === value ? "" : cell)) // If the same value is re-entered, clear the cell
          : r
      );
      setGrid(updatedGrid);
    }
  };

  const handleBoxClick = (row, col) => {
    setSelectedBox({ row, col });
  };

  return (
    <>
      <div className='sodo-main'>
        <div className="sudoku-grid">
          {grid.map((row, rowIndex) => (
            <div key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <input
                  key={colIndex}
                  type="text"
                  className={`cell ${selectedBox && selectedBox.row === rowIndex && selectedBox.col === colIndex ? 'selected' : ''}`}
                  value={cell}
                  onChange={(e) => handleChange(e, rowIndex, colIndex)}
                  onClick={() => handleBoxClick(rowIndex, colIndex)}
                  maxLength="1"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SudokuGrid;
