"use client";

import SectionTitle from "@/components/SectionTitle";
import TicTacToe from "./ticTacToe";
import Link from "next/link";

export default function TicTacToePage() {
    return (
        <>
            {/* Header */}
            <div className="bg-primary min-h-[25vh] flex items-center justify-center"></div>

            {/* Tic Tac Toe Section */}
            <SectionTitle backgroundText="Game" foregroundText="Tic Tac Toe" />

            <section className="pb-12">
                <div className="container mx-auto px-8 lg:px-20 xl:px-32">
                    {/* Back Navigation */}
                    <div className="mb-8">
                        <Link
                            href="/learning/react"
                            className="inline-flex items-center text-primary hover:underline"
                        >
                            <i className="fa fa-arrow-left mr-2"></i>
                            Back to React Learning
                        </Link>
                    </div>

                    {/* Description */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                            Logic implementation
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            1. useState hook to store an array 9 null element
                            and set X as first player.
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            2. function that accepts squares to calculate who is
                            the winner by iterating all winning combination
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            3. handleClick return if there's winner or position
                            filled, create a new board, check who's current
                            player, set next player, update board.
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            4. reset function that set board and player to the
                            original.
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            5. JSX function that has onClick to render board[i].
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            6. store winner, check draw if !winner and every
                            square on board is not null, check status if someone
                            is winner, game is draw, show next player.
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto">
                            7. return an array that render 9 null squares and
                            render square, and button to reset game.
                        </p>
                    </div>

                    {/* Game Container */}
                    <div className="flex justify-center mb-12">
                        <TicTacToe />
                    </div>

                    {/* Code Tips */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-4">
                            Tips
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            1. create an array fill with 9 null elements:{" "}
                            <strong>Array(9).fill(null)</strong>
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            2. destructuring:{" "}
                            <strong>const [a,b,c] = lines[i]</strong>
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            3. create a copy of array:{" "}
                            <strong>const newBoard = board.slice()</strong>
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            Alternative of creating a copy of array:{" "}
                            <strong>[...board]</strong> or{" "}
                            <strong>Array.from(board)</strong>
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            4. render the index of the board:{" "}
                            <strong>.map((_, i) ={">"} renderSquare(i))</strong>
                        </p>
                        <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-2">
                            5. for the reset button remember passing a function
                            reference,{" "}
                            <strong>
                                onClick={"{"}resetGame{"}"}
                            </strong>
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
