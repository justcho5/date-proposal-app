import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Image from "./components/Image";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [x, setX] = useState(-1);
  const [y, setY] = useState(-1);
  const [clicked, setClicked] = useState(false);

  const handleNoClick = () => {
    console.log("Click No");
    const vw =
      Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
      ) - 50;
    const vh =
      Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
      ) - 50;

    const getRandomInt = (max: number) => {
      return Math.floor(Math.random() * max);
    };

    setX(getRandomInt(vw));
    setY(getRandomInt(vh));
  };

  const handleYesClick = () => {
    setClicked(true);
    console.log("Click Yes");
  };
  return (
    <div className="app">
      {clicked ? (
        <div>Cool!</div>
      ) : (
        <div>
          <Header />
          <Image />
          <div className="buttons">
            <Button text="Yes" handleClick={handleYesClick} x={-1} y={-1} />
            <Button text="No" handleClick={handleNoClick} x={x} y={y} />
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
