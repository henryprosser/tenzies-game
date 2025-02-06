import { useState, useEffect } from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(() => generateAllNewDice());
  const [gameWon, setGameWon] = useState(false);

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const allSameValue = dice.every((die) => die.value === dice[0].value);

    if (allHeld && allSameValue) {
      setGameWon(true); // Set game as won if conditions are met
    } else {
      setGameWon(false); // Otherwise, ensure gameWon is false
    }
  }, [dice]);

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  function hold(id) {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }

  const diceElements = dice.map((die) => {
    return (
      <Die
        className="die"
        key={die.id}
        value={die.value}
        isHeld={die.isHeld}
        onClick={() => hold(die.id)}
      ></Die>
    );
  });

  function rollDice() {
    setDice((prevDice) =>
      prevDice.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }

  function startNewGame() {
    setDice(generateAllNewDice());
  }

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="dice__container">{diceElements}</div>
      <button
        className="roll__button"
        onClick={gameWon ? startNewGame : rollDice}
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
      {gameWon && <Confetti />}
    </main>
  );
}

export default App;
