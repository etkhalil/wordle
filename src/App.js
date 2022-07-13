import { useState, useEffect } from "react";
import './App.css';
// Components
import Line from './components/line';
import Modal from './components/modal';
import Notification from "./components/notification";

import WORDS from './words'

function App() {

  const [guess, setGuess] = useState(WORDS[Math.floor(Math.random() * WORDS.length)])
  const [word, setWord] = useState('')
  const letters = "abcdefghijklmnopqrstuvwxyz"
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false) 
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMofitication, setIsOpenMofitication] = useState(false)

  const restartGame = () => {
    setIsOpen(false)
    setGameOver(true)
    setWord('')
    setGuess(WORDS[Math.floor(Math.random() * WORDS.length)])
  }

  useEffect(() => {
    const handleType = event => {
      
      if (word.length === 25) return setGameOver(true)
      
      if (!letters.includes(event.key) && event.keyCode !== 13 && event.keyCode !== 8) return;
      
      if (event.keyCode === 8) return setWord(word => word.slice(0, word.length-1))
      
      if (word === guess) return setIsOpen(true)
      
      if (word.length !== 0 && word.length % 5 === 0) {
        const lastWord = word.slice(word.length-5)
        if (WORDS.includes(lastWord)) {
          if (lastWord === guess) return setIsOpen(true)
        } else {
          setIsOpenMofitication(true)
          setTimeout(() => {
            setIsOpenMofitication(false)
          }, 1000)
          return
        }
      }
      
      setWord(word => word+event.key)
      
      if (word === guess) return setIsOpen(true)
    }

    window.addEventListener('keydown', handleType)
    return () => window.removeEventListener('keydown', handleType)
  }, [word, guess])
  console.log(guess)
  return (
    <div className="App">
      <Modal handleStart={restartGame} isOpen={isOpen} />
      <Line word={word.slice(0,5)} guess={guess} />
      <Line word={word.slice(5,10)} guess={guess} />
      <Line word={word.slice(10,15)} guess={guess} />
      <Line word={word.slice(15,20)} guess={guess} />
      <Line word={word.slice(20,25)} guess={guess} />
      <Notification isOpen={isOpenMofitication} text="Not valid word!"/>
    </div>
  );
}

export default App;
