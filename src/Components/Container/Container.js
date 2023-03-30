import React from 'react';
import { useEffect, useRef } from 'react';
import LeftBlock from '../LeftBlock/LeftBlock';
import RightBlock from '../RightBlock/RightBlock';
import Circle from '../Circle/Circle';
import './Container.css';

function Container(props) {
    const leftBlockRef = useRef(null);
    const rightBlockRef = useRef(null);
    const circleRef = useRef(null);

    const handleStartAnimation = () => {
        setTimeout(() => {
            props.setIsStart(false);
        }, 2000);

        const circle = circleRef.current;
        const leftBlock = leftBlockRef.current.getBoundingClientRect();
        const rightBlock = rightBlockRef.current.getBoundingClientRect();
        const circleBlock = circle.getBoundingClientRect();
        const circleBlockHalf = circleBlock.width/2;
    
        const startPosX = leftBlock.left + leftBlock.width/2 - circleBlockHalf;
        const startPosY = leftBlock.top + leftBlock.height/2 - circleBlockHalf;
        const endPosX = rightBlock.left + rightBlock.width/2 - circleBlockHalf;
        const endPosY = rightBlock.top + rightBlock.height/2 - circleBlockHalf;
    
        circle.animate(
          [
            {
              transform: `translate(${startPosX}px, ${startPosY}px)`,
            },
            {
              transform: `translate(${endPosX}px, ${endPosY}px)`,
            },
          ],
          {
            duration: 2000,
            easing: 'ease-out',
          }
        );
    }

    useEffect(() => {
        if (props.isStart) {
            handleStartAnimation();
        }
    }, [ props.isStart ]);
    return (
        <div className="container">
            <LeftBlock leftBlockRef={leftBlockRef}/>
            <RightBlock rightBlockRef={rightBlockRef}/>
            <Circle isStart={props.isStart} circleRef={circleRef}/>
        </div>
    );
}

export default Container;