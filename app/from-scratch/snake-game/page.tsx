"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export default function SnakeGame() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const gameLoopRef = useRef<NodeJS.Timeout | null>(null)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const [direction, setDirection] = useState({ x: 0, y: 0 })
  const [snake, setSnake] = useState<{ x: number; y: number }[]>([{ x: 10, y: 10 }])
  const [apple, setApple] = useState({ x: 5, y: 5 })

  // Game constants
  const GRID_SIZE = 20
  const GAME_SPEED = 100 // milliseconds
  const CANVAS_SIZE = 400

  // Initialize game
  useEffect(() => {
    if (!gameStarted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Reset game state
    setSnake([{ x: 10, y: 10 }])
    setDirection({ x: 0, y: 0 })
    setScore(0)
    setGameOver(false)
    setIsPaused(false)
    placeApple()

    // Draw initial state
    drawGame()

    // Set up keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent arrow keys from scrolling the page
      if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.key)) {
        e.preventDefault()
      }

      if (gameOver) return

      // Handle direction changes
      switch (e.key) {
        case "ArrowUp":
        case "w":
          if (direction.y !== 1) setDirection({ x: 0, y: -1 })
          break
        case "ArrowDown":
        case "s":
          if (direction.y !== -1) setDirection({ x: 0, y: 1 })
          break
        case "ArrowLeft":
        case "a":
          if (direction.x !== 1) setDirection({ x: -1, y: 0 })
          break
        case "ArrowRight":
        case "d":
          if (direction.x !== -1) setDirection({ x: 1, y: 0 })
          break
        case " ":
          setIsPaused((prev) => !prev)
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    // Clean up
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      if (gameLoopRef.current) {
        clearTimeout(gameLoopRef.current)
        gameLoopRef.current = null
      }
    }
  }, [gameStarted])

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || isPaused) return

    const runGameLoop = () => {
      moveSnake()
      drawGame()

      // Check if game should continue
      if (!gameOver) {
        gameLoopRef.current = setTimeout(runGameLoop, GAME_SPEED)
      }
    }

    // Start game loop
    gameLoopRef.current = setTimeout(runGameLoop, GAME_SPEED)

    // Clean up
    return () => {
      if (gameLoopRef.current) {
        clearTimeout(gameLoopRef.current)
      }
    }
  }, [gameStarted, gameOver, isPaused, direction, snake, apple])

  // Place apple in random position
  const placeApple = () => {
    const newApple = {
      x: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
      y: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
    }

    // Make sure apple doesn't spawn on snake
    const isOnSnake = snake.some((segment) => segment.x === newApple.x && segment.y === newApple.y)

    if (isOnSnake) {
      placeApple()
    } else {
      setApple(newApple)
    }
  }

  // Move snake
  const moveSnake = () => {
    if (direction.x === 0 && direction.y === 0) return

    const newSnake = [...snake]
    const head = { ...newSnake[0] }

    // Move head in current direction
    head.x += direction.x
    head.y += direction.y

    // Check for collisions
    if (
      head.x < 0 ||
      head.y < 0 ||
      head.x >= CANVAS_SIZE / GRID_SIZE ||
      head.y >= CANVAS_SIZE / GRID_SIZE ||
      newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true)
      return
    }

    // Add new head
    newSnake.unshift(head)

    // Check if snake ate the apple
    if (head.x === apple.x && head.y === apple.y) {
      setScore((prev) => prev + 1)
      placeApple()
    } else {
      // Remove tail if no apple was eaten
      newSnake.pop()
    }

    setSnake(newSnake)
  }

  // Draw game
  const drawGame = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.fillStyle = "#333"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw snake
    snake.forEach((segment, index) => {
      ctx.fillStyle = index === 0 ? "#8BC34A" : "#4CAF50" // Head is lighter green
      ctx.fillRect(segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2)
    })

    // Draw apple
    ctx.fillStyle = "#FF5252"
    ctx.beginPath()
    const radius = GRID_SIZE / 2 - 2
    const centerX = apple.x * GRID_SIZE + GRID_SIZE / 2
    const centerY = apple.y * GRID_SIZE + GRID_SIZE / 2
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
    ctx.fill()

    // Draw score
    ctx.fillStyle = "white"
    ctx.font = "16px Arial"
    ctx.fillText(`Score: ${score}`, 10, 20)
  }

  // Start game
  const startGame = () => {
    setGameStarted(true)
  }

  // Restart game
  const restartGame = () => {
    // Clear any existing game loop
    if (gameLoopRef.current) {
      clearTimeout(gameLoopRef.current)
      gameLoopRef.current = null
    }

    // Reset all game state
    setGameOver(false)
    setScore(0)
    setIsPaused(false)
    setSnake([{ x: 10, y: 10 }])
    setDirection({ x: 0, y: 0 })

    // Place a new apple
    const newApple = {
      x: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
      y: Math.floor(Math.random() * (CANVAS_SIZE / GRID_SIZE)),
    }
    setApple(newApple)

    // Force a redraw of the game
    setTimeout(() => {
      const canvas = canvasRef.current
      if (canvas) {
        const ctx = canvas.getContext("2d")
        if (ctx) {
          // Clear canvas
          ctx.fillStyle = "#333"
          ctx.fillRect(0, 0, canvas.width, canvas.height)

          // Draw initial snake
          ctx.fillStyle = "#8BC34A"
          ctx.fillRect(10 * GRID_SIZE, 10 * GRID_SIZE, GRID_SIZE - 2, GRID_SIZE - 2)

          // Draw apple
          ctx.fillStyle = "#FF5252"
          ctx.beginPath()
          const radius = GRID_SIZE / 2 - 2
          const centerX = newApple.x * GRID_SIZE + GRID_SIZE / 2
          const centerY = newApple.y * GRID_SIZE + GRID_SIZE / 2
          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
          ctx.fill()

          // Draw score
          ctx.fillStyle = "white"
          ctx.font = "16px Arial"
          ctx.fillText(`Score: 0`, 10, 20)
        }
      }
    }, 50)
  }

  // Handle touch controls for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!gameStarted || gameOver) return

    const touch = e.touches[0]
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const touchX = touch.clientX - rect.left
    const touchY = touch.clientY - rect.top
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Determine swipe direction
    const dx = touchX - centerX
    const dy = touchY - centerY

    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal swipe
      if (dx > 0 && direction.x !== -1) {
        setDirection({ x: 1, y: 0 })
      } else if (dx < 0 && direction.x !== 1) {
        setDirection({ x: -1, y: 0 })
      }
    } else {
      // Vertical swipe
      if (dy > 0 && direction.y !== -1) {
        setDirection({ x: 0, y: 1 })
      } else if (dy < 0 && direction.y !== 1) {
        setDirection({ x: 0, y: -1 })
      }
    }
  }

  return (
    <div className="snake-game-container">
      <h1 className="game-title">Snake Game</h1>

      {!gameStarted ? (
        <div className="start-screen">
          <h2>Welcome to Snake!</h2>
          <p>Use arrow keys or WASD to control the snake.</p>
          <p>Press spacebar to pause/resume.</p>
          <p>Collect the red apples to grow and earn points.</p>
          <button className="game-button" onClick={startGame}>
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="game-stats">
            <p>Score: {score}</p>
            {isPaused && <p className="paused-text">PAUSED</p>}
          </div>

          <canvas
            ref={canvasRef}
            width={CANVAS_SIZE}
            height={CANVAS_SIZE}
            className="game-canvas"
            onTouchStart={handleTouchStart}
          />

          {direction.x === 0 && direction.y === 0 && !gameOver && (
            <div className="waiting-message">
              <p>Press an arrow key or WASD to start moving</p>
            </div>
          )}

          {gameOver && (
            <div className="game-over">
              <h2>Game Over!</h2>
              <p>Your score: {score}</p>
              <button className="game-button" onClick={restartGame}>
                Play Again
              </button>
            </div>
          )}

          <div className="mobile-controls">
            <p>Swipe on the game area to control the snake</p>
            <button className="pause-button" onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? "Resume" : "Pause"}
            </button>
          </div>
        </>
      )}

      <div className="back-link-container">
        <Link href="/from-scratch" className="back-link">
          Back to 3D Printing & Cosplay
        </Link>
      </div>

      <style jsx>{`
        .snake-game-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        .game-title {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #2c3e50;
        }
        
        .game-canvas {
          display: block;
          margin: 0 auto;
          border: 4px solid #2c3e50;
          border-radius: 8px;
          background-color: #333;
        }
        
        .game-stats {
          display: flex;
          justify-content: space-between;
          margin-bottom: 1rem;
          font-size: 1.25rem;
          font-weight: bold;
        }
        
        .paused-text {
          color: #e74c3c;
        }
        
        .waiting-message {
          margin: 1rem 0;
          padding: 0.5rem;
          background-color: rgba(255, 255, 255, 0.9);
          border-radius: 4px;
          color: #2c3e50;
          font-weight: bold;
        }
        
        .start-screen, .game-over {
          background-color: rgba(255, 255, 255, 0.9);
          padding: 2rem;
          border-radius: 8px;
          margin: 2rem auto;
          max-width: 400px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        
        .game-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 1rem;
          transition: background-color 0.3s;
        }
        
        .game-button:hover {
          background-color: #2980b9;
        }
        
        .pause-button {
          background-color: #f39c12;
          color: white;
          border: none;
          padding: 0.5rem 1rem;
          font-size: 0.9rem;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 0.5rem;
          transition: background-color 0.3s;
        }
        
        .pause-button:hover {
          background-color: #e67e22;
        }
        
        .mobile-controls {
          margin-top: 1.5rem;
          display: none;
        }
        
        .back-link-container {
          margin-top: 2rem;
        }
        
        .back-link {
          color: #3498db;
          text-decoration: none;
        }
        
        .back-link:hover {
          text-decoration: underline;
        }
        
        @media (max-width: 768px) {
          .game-canvas {
            width: 100%;
            height: auto;
          }
          
          .mobile-controls {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
