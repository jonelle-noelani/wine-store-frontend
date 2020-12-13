import React from "react";
import Confetti from "react-confetti";
import { useState, useEffect } from "react";

const Success = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 100);
    });
    
    const successStyle = {
      width: '400px',
      height: 'auto',
      paddingLeft: '60px',
      paddingRight: '60px',
      paddingBottom: '20px',
      paddingTop: '20px',
      margin: 'auto',
      background: 'gray',
      boxShadow: "3px 4px #00ff00",
  }
    return (
        <div>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <h3>congrats!</h3>
        <div style={successStyle}>
        <p>Stripe has successfully processed your payment</p>
        </div>
        </div>
    )
};

export default Success;