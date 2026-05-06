import React from "react"
import { increment,decrement,reset } from "../store/counterSlice";
import { useSelector, useDispatch } from 'react-redux'

function Counter() {

    const count=useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()

    return (
        <>
            <h2>count:{count}</h2>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <button onClick={() => dispatch(reset())}>Reset</button>

        </>
    );
}

export default Counter;