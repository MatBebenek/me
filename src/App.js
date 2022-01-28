import { useContext } from "react";
import './App.css';
import Intro from "./components/intro/Intro";
import Exp from "./components/exp/Exp";

function App() {
  return (
    <div>
          <Intro />
          <Exp />
    </div>
  );
}

export default App;
