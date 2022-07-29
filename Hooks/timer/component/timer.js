import { useState, useEffect } from 'react';
function Timer() {
    const [time, setTime] = useState(10);
    useEffect(() => {
        const timeInterval = setInterval(() => {
            setTime(time - 1)
        }, 1000);
      if(!time){
        clearInterval(timeInterval);
      }
    })
    return <div>
            <h1>Time left: {time}</h1>
        </div>

}
export default Timer;