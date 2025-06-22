import React from "react";
import { useState } from "react";

export default function TicTacToe() {
    // create an array with 9 null elements
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    // 0 1 2
    // 3 4 5
    // 6 7 8

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        // check all winning combination
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (
                squares[a] &&
                squares[a] === squares[b] &&
                squares[a] === squares[c]
            ) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        // return if there's winner or position already filled
        if (calculateWinner(board) || board[i]) {
            return;
        }
        // create a new board
        const newBoard = board.slice();
        newBoard[i] = isXNext ? "X" : "O";
        setBoard(newBoard);
        setIsXNext(!isXNext);
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setIsXNext(true);
    };

    const winner = calculateWinner(board);
    const isDraw = !winner && board.every((square) => square !== null);
    let status;
    if (winner) {
        status = `Winner is ${winner}`;
    } else if (isDraw) {
        status = "It is a draw";
    } else {
        status = `Next player is ${isXNext ? "X" : "O"}`;
    }

    const renderSquare = (i) => {
        return (
            <button
                className="w-16 h-16 border border-gray-400 bg-white text-xl font-bold hover:bg-gray-100"
                onClick={() => handleClick(i)}
            >
                {board[i]}
            </button>
        );
    };

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
            <div className="mb-4 text-lg">{status}</div>
            <div className="grid grid-cols-3 gap-1 w-fit mb-4">
                {Array(9)
                    .fill(null)
                    .map((_, i) => renderSquare(i))}
            </div>
            <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
}
