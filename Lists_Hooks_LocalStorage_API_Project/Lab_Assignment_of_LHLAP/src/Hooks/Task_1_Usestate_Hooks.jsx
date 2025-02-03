//Task - 1 Create a functional component with a counter using the useState()hook. Include buttons to increment and decrement the counter

import React, { useState } from 'react'

const Hooks = () => {

  const [count,setCount] = useState(0);

  const counts = () => {
    setCount(count + 1);
  }

  return (
    <div>
      
        <h1>Usestate Hooks Assignment</h1>

        <h1>Count is --- {count}</h1>
        <button onClick={counts}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        
    </div>
  )
}

export default Hooks