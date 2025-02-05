import { useState } from "react";
import Die from "../components/Die";

function App() {
  const [dice, setDice] = useState(generateAllNewDice());

  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((num) => {
    return <Die className="die" value={num}></Die>;
  });

  return (
    <main>
      <div className="dice__container">{diceElements}</div>
    </main>
  );
}

export default App;
