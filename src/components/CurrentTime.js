import React from 'react'
import { useState, useEffect } from 'react'
export default function CurrentTime() {
  const [time, setTime] = useState(new Date());
 useEffect(() => {
  var timerID = setInterval( () => tick(), 1000 );

  return function cleanup() {
      clearInterval(timerID);
    };
 });

   function tick() {
    setTime(new Date());
   }

   return (
      <div>
        <h2>Current {time.toLocaleTimeString()}.</h2>
      </div>
    );
}