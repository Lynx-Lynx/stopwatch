import React, {useState, useEffect} from 'react';
import '../styles/stopwatch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle, faStopCircle } from '@fortawesome/free-solid-svg-icons';

const Stopwatch = () => {
	const [time, setTime] = useState(0);
	const [start, setStart] = useState(false);
  const [isActive, setActive] = useState(false);

  useEffect(() => {
    let interval = 0;
    start 
      ? interval = setInterval(() => setTime(prevTime => prevTime + 10), 10)
      : clearInterval(interval);

      return () => clearInterval(interval)
  }, [start]);

  const play = () => {
    if (!isActive && !start) {
      setStart(true)
    } else if (isActive) {
       setActive(false)
       setStart(true)
    }
  };

  const pause = () => {
    if (start) {
      setActive(true)
      setStart(false)
    }
  };

  const stop = () => {
    setTime(0)
    setStart(false)
    setActive(false)
  }

return (
	<div className='main'>
 		<h1 className='glow'>STOPWATCH</h1>
    <div className='stopwatch glow'>
    <div className={isActive ? 'blinking': 'time'}>
      <span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{('0' + Math.floor((time / 10) % 1000)).slice(-2)}</span>
     </div>
    </div>
    <div>
      <FontAwesomeIcon icon={faPlayCircle}
        className='btn'
        onClick={play}
      />
      <FontAwesomeIcon icon={faPauseCircle} 
        className='btn'
        onClick={pause}
      />
      <FontAwesomeIcon icon={faStopCircle} 
        className='btn'
        onClick={stop}
      />
   	</div>
  </div>
 );

}

export default Stopwatch;