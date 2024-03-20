import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

const choice = {
  rock: {
    name: "Rock",
    img: "https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png",
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png",
  },
  paper: {
    name: "Paper",
    img: "https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png",
  },
};
function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");
  //const [computerResult, setComputerResult] = useState("");
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
   // setComputerResult(ComJudgement(computerChoice,choice[computerChoice]))
  };

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer);
    if (user.name === computer.name) {
      return "Tie";
    } else if (user.name === "Rock")
      return computer.name === "Scissors" ? "Win" : "Lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "Win" : "Lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "Win" : "Lose";
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("array", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    console.log("random", randomItem);
    let final = itemArray[randomItem];
    console.log("final", final);
    return choice[final];
  };

  return (
    <div className="container">
      {/* <div>
        <img className ="img-mickey" src = "https://thumbnail6.coupangcdn.com/thumbnails/remote/492x492ex/image/retail/images/2020/01/20/9/6/81fa4678-cae3-46ea-a7a4-db0a11921d87.jpg"/>
      </div> */}
      <div className="top">가위바위보 게임</div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button className="button btn btn-outline-secondary" onClick={() => play("scissors")}>가위</button>
        <button className="button btn btn-outline-secondary" onClick={() => play("rock")}>바위</button>
        <button className="button btn btn-outline-secondary" onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
