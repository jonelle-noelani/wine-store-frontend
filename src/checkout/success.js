import Confetti from "react-confetti";
import { useState, useEffect } from "react";

export default () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 100);
    });

    return (
        <Container>
        <Confetti width={width} height={height} numberOfPieces={450} />
        <Title>congrats!</Title>
        <Message>Stripe has successfully processed your payment</Message>
      </Container>
    )
};