"use client";

import { useState } from "react";

export default function TicTacToe() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // columns
        [0, 4, 8],
        [2, 4, 6], // diagonals
    ];

    const checkWinner = (newBoard) => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (
                newBoard[a] &&
                newBoard[a] === newBoard[b] &&
                newBoard[a] === newBoard[c]
            ) {
                return newBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        if (board[index] || winner || gameOver) return;

        const newBoard = [...board];
        newBoard[index] = currentPlayer;
        setBoard(newBoard);

        const gameWinner = checkWinner(newBoard);
        if (gameWinner) {
            setWinner(gameWinner);
            setGameOver(true);
        } else if (newBoard.every((cell) => cell !== null)) {
            setGameOver(true);
        } else {
            setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
        }
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null));
        setCurrentPlayer("X");
        setWinner(null);
        setGameOver(false);
    };

    const getStatusMessage = () => {
        if (winner) {
            return `🎉 Player ${winner} wins!`;
        } else if (gameOver) {
            return "🤝 It's a tie!";
        } else {
            return `Current player: ${currentPlayer}`;
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
            <h4 className="font-bold text-lg mb-4 text-primary text-center">
                Tic Tac Toe
            </h4>

            {/* Game Status */}
            <div className="text-center mb-4">
                <p
                    className={`text-sm font-medium ${
                        winner
                            ? "text-green-600"
                            : gameOver
                            ? "text-yellow-600"
                            : "text-gray-600"
                    }`}
                >
                    {getStatusMessage()}
                </p>
            </div>

            {/* Game Board */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        onClick={() => handleClick(index)}
                        className={`
                            aspect-square flex items-center justify-center text-2xl font-bold
                            border-2 border-gray-300 rounded-lg transition-all duration-200
                            ${
                                cell
                                    ? "cursor-not-allowed"
                                    : "hover:bg-gray-50 hover:border-primary cursor-pointer"
                            }
                            ${winner || gameOver ? "cursor-not-allowed" : ""}
                            ${
                                cell === "X"
                                    ? "text-blue-600"
                                    : cell === "O"
                                    ? "text-red-600"
                                    : "text-gray-400"
                            }
                        `}
                        disabled={!!cell || !!winner || gameOver}
                    >
                        {cell}
                    </button>
                ))}
            </div>

            {/* Reset Button */}
            <div className="text-center">
                <button
                    onClick={resetGame}
                    className="bg-primary text-white px-4 py-2 rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                    <i className="fa fa-refresh mr-2"></i>
                    New Game
                </button>
            </div>

            {/* Game Rules */}
            <div className="mt-4 text-xs text-gray-500 text-center">
                <p>Get three in a row to win!</p>
            </div>
        </div>
    );
}
