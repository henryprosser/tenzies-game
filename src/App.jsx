import { useState } from "react";
import Die from "../components/Die";
import { nanoid } from "nanoid";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

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

  return (
    <main>
      <div className="dice__container">{diceElements}</div>
      <button className="roll__button" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
}

export default App;
