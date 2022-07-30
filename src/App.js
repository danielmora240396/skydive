import './App.css';
import { useState,  useEffect } from 'react';
import Timer from './components/Timer/Timer.js';

function App() {
  const targetDate = new Date(2022, 8, 3, 7, 30, 0);
  const [timer, setTimer] = useState({});

  useEffect(() =>{
    getRemainingTime();
  }, []);

  useEffect(() => {
    setInterval(() => {
      getRemainingTime();
    }, 1000);
  }, [timer])

  const getRemainingTime = () => {
    var remainingTime = targetDate - new Date().getTime();
    var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    setTimer({days: days, hours: hours, minutes: minutes, seconds: seconds });
  }


  return (
    <div className="App">
      <Timer timer={timer}></Timer>
      <p>{targetDate.days}</p>
    </div>
  );
}

export default App;
