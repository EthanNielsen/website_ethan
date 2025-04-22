"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

// Riddle database
const riddles = [
  {
    question: "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question: "The more you take, the more you leave behind. What am I?",
    answer: "Footsteps",
  },
  {
    question: "What has keys but no locks, space but no room, and you can enter but not go in?",
    answer: "A keyboard",
  },
  {
    question: "What gets wetter as it dries?",
    answer: "A towel",
  },
  {
    question: "I'm tall when I'm young, and I'm short when I'm old. What am I?",
    answer: "A candle",
  },
  {
    question: "What has a head, a tail, is brown, and has no legs?",
    answer: "A penny",
  },
  {
    question: "What has many keys but can't open a single lock?",
    answer: "A piano",
  },
  {
    question: "What can travel around the world while staying in a corner?",
    answer: "A stamp",
  },
  {
    question: "What has a neck but no head?",
    answer: "A bottle",
  },
  {
    question: "What invention lets you look right through a wall?",
    answer: "A window",
  },
]

export default function RiddleGenerator() {
  const [currentRiddle, setCurrentRiddle] = useState<number | null>(null)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userGuess, setUserGuess] = useState("")
  const [feedback, setFeedback] = useState("")
  const [score, setScore] = useState(0)
  const [gamesPlayed, setGamesPlayed] = useState(0)

  const generateRiddle = () => {
    const randomIndex = Math.floor(Math.random() * riddles.length)
    setCurrentRiddle(randomIndex)
    setShowAnswer(false)
    setUserGuess("")
    setFeedback("")
  }

  const checkAnswer = () => {
    if (currentRiddle === null) return

    const correctAnswer = riddles[currentRiddle].answer.toLowerCase()
    const userAnswer = userGuess.toLowerCase()

    if (userAnswer === correctAnswer) {
      setFeedback("Correct! You got it right!")
      setScore(score + 1)
    } else {
      setFeedback(`Sorry, that's not correct. The answer is: ${riddles[currentRiddle].answer}`)
    }

    setShowAnswer(true)
    setGamesPlayed(gamesPlayed + 1)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer()
    }
  }

  return (
    <div className="min-h-screen py-8" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <div className="container mx-auto px-4">
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Riddle Generator</CardTitle>
            <p className="text-gray-500">Test your brain with these challenging riddles!</p>
          </CardHeader>

          <CardContent>
            {currentRiddle !== null ? (
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg shadow-inner">
                  <h3 className="text-xl font-medium mb-2">Riddle:</h3>
                  <p className="text-lg">{riddles[currentRiddle].question}</p>
                </div>

                {!showAnswer && (
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Answer:
                      </label>
                      <input
                        type="text"
                        id="answer"
                        value={userGuess}
                        onChange={(e) => setUserGuess(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Type your answer here..."
                      />
                    </div>
                    <Button onClick={checkAnswer} className="w-full">
                      Check Answer
                    </Button>
                  </div>
                )}

                {showAnswer && (
                  <div
                    className={`p-4 rounded-md ${feedback.includes("Correct") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    <p className="font-medium">{feedback}</p>
                  </div>
                )}

                {showAnswer && (
                  <Button onClick={generateRiddle} variant="outline" className="w-full">
                    Next Riddle
                  </Button>
                )}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="mb-4">Click the button below to generate a random riddle!</p>
                <Button onClick={generateRiddle} size="lg">
                  Start Riddle Game
                </Button>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-4">
            <div>
              <p className="text-sm text-gray-500">Games played: {gamesPlayed}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">
                Score: {score}/{gamesPlayed}
              </p>
            </div>
          </CardFooter>
        </Card>

        <div className="mt-8 text-center">
          <Link href="/from-scratch" className="text-white hover:underline">
            Back to From-Scratch Page
          </Link>
        </div>
      </div>
    </div>
  )
}
