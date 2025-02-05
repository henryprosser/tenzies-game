import Die from "../components/Die";

function App() {
  return (
    <main>
      <div className="dice__container">
        <Die className="die" value="1"></Die>
        <Die className="die" value="2"></Die>
        <Die className="die" value="3"></Die>
        <Die className="die" value="4"></Die>
        <Die className="die" value="5"></Die>
        <Die className="die" value="6"></Die>
        <Die className="die" value="1"></Die>
        <Die className="die" value="2"></Die>
        <Die className="die" value="3"></Die>
        <Die className="die" value="4"></Die>
      </div>
    </main>
  );
}

export default App;
