import React from 'react';
import "../App.css";

const Box = (props) => {
    const defaultImg = {
        user: {
            name: "shon",
            img: "https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/mQ2yESOvJWpGS_UkYHW1GZCSr10"
        },
        computer: {
            name: "gromit",
            img: "https://i.pinimg.com/236x/0d/85/17/0d8517d7e6bdd86a3a4b02d6d0209e21.jpg"
        }
    };

    const selecimg=()=>{
        return props.title=="I'M SHON"? defaultImg.user.img: defaultImg.computer.img;
    }
  
    let result = "";
    if (props.title === "I'M GROMIT" && props.result !== "" && props.result !== "tie") {
        result = props.result === "win" ? "lose" : "win";
    } else {
        result = props.result;
    }

    return (
        <div className={`box-style ${result}`}>
            <div className="titlenone">{props.title}</div>
            <img className="img-style" src={props.item?props.item.img:selecimg()} />
            <div className="resultnone">{result}</div>
        </div>
    );
}

export default Box;
