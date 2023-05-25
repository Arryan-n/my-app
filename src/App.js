import reactlogo from "./react-sticker.jpg";
import gitlogo from "./git.jpg";
import npmlogo from "./npm.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Deploy React APP on Github Pages</h1>
      <div className="logosec">
        <img src={reactlogo} />
        <h1>+</h1>
        <img src={npmlogo} width="225px" />
        <h1>=</h1>
        <img src={gitlogo} width="225px" />
      </div>
    </div>
  );
}

export default App;
