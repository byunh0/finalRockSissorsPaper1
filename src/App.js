import React from 'react'
import "./App.css"
import Box from "./component/Box"
import {useState} from "react"
import rock from "./img/rock.png"
import paper from "./img/paper.png"
import scissors from "./img/scissors.png"
const App = () => {
  const choice={
    rock:{
      name: "Rock",
      img: rock
    },

    scissors:{
      name: "Scissors",
      img: scissors
    },
    
    paper:{
       name: "Paper",
       img: paper
    }
  }
 
  const[userChoice,setUserChoice]=useState(null);

  const[computerChoice,setComputerChoice]=useState(null);

  const[result,setResult]=useState("");

  const play=(user)=>{
  setUserChoice(choice[user])
  const complay=randomplay()
  setComputerChoice(complay)
  setResult(justify(choice[user],complay))
  }
 
  const justify=(user,computer)=>{
    if(user.name==computer.name){return "tie"}else if(user.name=="Scissors"){return computer.name=="Rock"?"win":"lose"}
    else if(user.name=="Rock"){return computer.name=="Paper"?"win":"lose"}else if(user.name=="Paper"){return computer.name=="Scissors"?"win":"lose"}
  }

  const randomplay=()=>{
    const choiceArray=Object.keys(choice)//[rock,scissors,paper]
    const randomnum=Math.floor(Math.random()*choiceArray.length);
    const final=choiceArray[randomnum] ;
    console.log("final",final);
    return choice[final]
 
  }
  return (
    <div className="container">
      <div className="box-container">
      <Box title="I'M SHON" item={userChoice} result={result}/>
      <Box title="I'M GROMIT" item={computerChoice}  result={result}/>
      </div>
      <div className="buttonContainer">
        <button className="buttonStyle" onClick={()=>play("scissors")}>가위</button>
        <button className="buttonStyle" onClick={()=>play("rock")}>바위</button>
        <button className="buttonStyle" onClick={()=>play("paper")}>보</button>
      </div>
      
       
      </div>
    
  )
}

export default App