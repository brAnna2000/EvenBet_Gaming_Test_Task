import './Button.css';
import React, { useEffect, useState } from "react";

function Button(props) {
    const [ seconds, setSeconds ] = useState(5);
    const [ timerActive, setTimerActive ] = useState(false);

    useEffect(() => {
      if (seconds > 0 && timerActive) {
        setTimeout(() => {
          setSeconds(seconds - 1);
        }, 1000)
      } else {
        setTimerActive(false);
        props.setIsStart(false);
      }
    }, [ seconds, timerActive, props.setIsStart ]);
    const buttonClick = () => {
      setTimerActive(true);
      setSeconds(5);
      props.setIsStart(true);
    }
    return (
      <button onClick={() => buttonClick()}>{timerActive ? seconds : 'Start'}</button>
    );
}

export default Button;