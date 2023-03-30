import React, { useState } from "react";
import Container from './Components/Container/Container';
import Button from './Components/Button/Button';
import './App.css';

function App() {
    const [isStart, setIsStart] = useState(false);
    return (
      <div className="app">
        <Container isStart={isStart} setIsStart={setIsStart}/>
        <Button setIsStart={setIsStart}/>
      </div>
    );
}

export default App;