"use client";

import SectionTitle from "@/components/SectionTitle";
import TicTacToe from "./ticTacToe";
import Link from "next/link";
import { useState } from "react";
import { ticTacToeCode } from "@/data/learning/react/ticTacToeCode";

export default function TicTacToePage() {
    const [activeTab, setActiveTab] = useState<"demo" | "code">("demo");
    const [isCodeVisible, setIsCodeVisible] = useState(true);

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
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-4">
                            Logic implementation
                        </p>
                        <div className="max-w-4xl mx-auto space-y-2 text-sm text-gray-600">
                            <p>
                                1. useState hook to store an array 9 null
                                element and set X as first player.
                            </p>
                            <p>
                                2. function that accepts squares to calculate
                                who is the winner by iterating all winning
                                combination
                            </p>
                            <p>
                                3. handleClick return if there is winner or
                                position filled, create a new board, check who
                                is current player, set next player, update
                                board.
                            </p>
                            <p>
                                4. reset function that set board and player to
                                the original.
                            </p>
                            <p>
                                5. JSX function that has onClick to render
                                board[i].
                            </p>
                            <p>
                                6. store winner, check draw if !winner and every
                                square on board is not null, check status if
                                someone is winner, game is draw, show next
                                player.
                            </p>
                            <p>
                                7. return an array that render 9 null squares
                                and render square, and button to reset game.
                            </p>
                        </div>
                    </div>

                    {/* Desktop Hide/Show Code Button */}
                    <div className="hidden lg:flex justify-center mb-6">
                        <button
                            onClick={() => setIsCodeVisible(!isCodeVisible)}
                            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                                isCodeVisible
                                    ? "bg-gray-500 text-white hover:bg-gray-600"
                                    : "bg-primary text-white hover:bg-primary/90"
                            }`}
                        >
                            <i
                                className={`fa ${
                                    isCodeVisible ? "fa-eye-slash" : "fa-code"
                                } mr-2`}
                            ></i>
                            {isCodeVisible ? "Hide Code" : "Show Code"}
                        </button>
                    </div>

                    {/* Main Content - Game and Code Side by Side */}
                    <div
                        className={`grid gap-8 mb-12 transition-all duration-300 ${
                            isCodeVisible
                                ? "grid-cols-1 lg:grid-cols-2"
                                : "grid-cols-1"
                        }`}
                    >
                        {/* Left Side - Game Demo */}
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-gray-800">
                                    Interactive Demo
                                </h3>
                                {/* Mobile Tab Switcher - Only show on mobile */}
                                <div className="flex lg:hidden bg-gray-100 rounded-lg p-1">
                                    <button
                                        onClick={() => setActiveTab("demo")}
                                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
                                            activeTab === "demo"
                                                ? "bg-white text-primary shadow-sm font-medium"
                                                : "text-gray-600 hover:text-gray-800"
                                        }`}
                                    >
                                        Demo
                                    </button>
                                    <button
                                        onClick={() => setActiveTab("code")}
                                        className={`px-4 py-2 rounded-md text-sm transition-colors ${
                                            activeTab === "code"
                                                ? "bg-white text-primary shadow-sm font-medium"
                                                : "text-gray-600 hover:text-gray-800"
                                        }`}
                                    >
                                        Code
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Tab Content */}
                            <div className="lg:hidden">
                                {activeTab === "demo" ? (
                                    <div className="flex justify-center">
                                        <TicTacToe />
                                    </div>
                                ) : (
                                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                                        <pre className="text-green-400 text-xs leading-relaxed">
                                            <code>{ticTacToeCode}</code>
                                        </pre>
                                    </div>
                                )}
                            </div>

                            {/* Desktop - Always show demo */}
                            <div className="hidden lg:flex justify-center">
                                <TicTacToe />
                            </div>
                        </div>

                        {/* Right Side - Code Implementation (Desktop Only) */}
                        {isCodeVisible && (
                            <div className="hidden lg:block bg-white rounded-lg shadow-lg p-6">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Implementation Code
                                    </h3>
                                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                                        <i className="fa fa-code"></i>
                                        <span>ticTacToe.jsx</span>
                                    </div>
                                </div>

                                <div className="bg-gray-900 rounded-lg p-3 overflow-x-auto max-h-[600px] overflow-y-auto">
                                    <pre className="text-green-400 text-[10px] leading-tight whitespace-pre-wrap break-words">
                                        <code>{ticTacToeCode}</code>
                                    </pre>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Code Tips */}
                    <div className="mb-8">
                        <p className="text-gray-600 text-lg max-w-4xl mx-auto mb-4">
                            Tips
                        </p>
                        <div className="max-w-4xl mx-auto space-y-2 text-sm text-gray-600">
                            <p>
                                1. create an array fill with 9 null elements:{" "}
                                <strong>Array(9).fill(null)</strong>
                            </p>
                            <p>
                                2. destructuring:{" "}
                                <strong>const [a,b,c] = lines[i]</strong>
                            </p>
                            <p>
                                3. create a copy of array:{" "}
                                <strong>const newBoard = board.slice()</strong>
                            </p>
                            <p>
                                Alternative of creating a copy of array:{" "}
                                <strong>[...board]</strong> or{" "}
                                <strong>Array.from(board)</strong>
                            </p>
                            <p>
                                4. render the index of the board:{" "}
                                <strong>
                                    .map((_, i) =&gt; renderSquare(i))
                                </strong>
                            </p>
                            <p>
                                5. for the reset button remember passing a
                                function reference,{" "}
                                <strong>
                                    onClick={"{"}resetGame{"}"}
                                </strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
