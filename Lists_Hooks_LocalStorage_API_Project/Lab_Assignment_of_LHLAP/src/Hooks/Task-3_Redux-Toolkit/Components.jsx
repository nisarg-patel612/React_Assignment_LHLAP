import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './CounterSlice';

const Components = () => {

    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Redux Counter App</h1>
            <h2>Count : {count}</h2>

            <div>
                <button onClick={() => dispatch(increment())}>Add</button>
                <button onClick={() => dispatch(decrement())}>Minus</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    )
}

export default Components