import { useContext } from "react";
import './App.css';
import Intro from "./components/intro/Intro";
import Exp from "./components/exp/Exp";
import About from "./components/about/About";

function App() {
  return (
    <div>
          <Intro />
          <About />
    </div>
  );
}

export default App;
