import React, { useRef, useState } from 'react'

const UseRef = () => {

    const [count,setCount] = useState(0);
    const clickRef = useRef(0);

    const handleIncrement = () => {
        setCount((prev) => prev + 1);
        clickRef.current += 1;
        console.log("Click Count:", clickRef.current);
    };


    return (
        <div>
            <h1>UseRef Example</h1>
            <p>count : {count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <p>
                Number of Clicks (from useRef) : <b>{clickRef.current}</b>
            </p>
            <p>
                Note : The above value updates in the background but doesn't trigger re-renders.
            </p>
        </div>
    )
}

export default UseRef