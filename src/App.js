import { useState } from "react";
import "./App.css";
import Box from "./component/Box";


const choice = {
  rock:{
    name:"Rock",
    img:"https://blog.kakaocdn.net/dn/pSJwo/btqXJV1lACE/nx5XrxkCLWXh9UsnoS8vbK/img.png"

  },
  scissors:{
    name:"Scissors",
    img:"https://blog.kakaocdn.net/dn/HfURw/btqXKvOTNWK/gWTwPXEg9QzSV0ilOuwuak/img.png"
  },
  paper:{
    name:"Paper",
    img:"https://blog.kakaocdn.net/dn/HcCJo/btqXD4Lybq6/kcrH6skAoOD9oAq2QYfBx1/paper.png?attach=1&knm=img.png"
  }
};
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
  }

  const randomChoice =()=>{
    let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
    console.log("array",itemArray)
    let randomItem = Math.floor(Math.random()*itemArray.length)
    console.log("random",randomItem)
    let final = itemArray[randomItem]
    console.log("final",final)
    return choice[final]
  }

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={computerSelect}/>
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
