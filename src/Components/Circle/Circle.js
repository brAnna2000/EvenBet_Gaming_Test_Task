import './Circle.css';

function Circle(props) {
  return (
    <div className={!props.isStart ? "circle" : "circleActive"} ref={props.circleRef}></div>
  );
}

export default Circle;