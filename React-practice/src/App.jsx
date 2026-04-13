import React, { useState } from 'react';

function useCounter(initialvalue = 0) {
  const [count, setCount] = useState(initialvalue);

  const Increment=()=> setCount(count+1);
  const Decrement=()=>  setCount(count-1);
  const Reset=()=>  setCount(initialvalue);

  return{count ,Increment, Decrement,Reset}
}

function App() {

  const{count ,Increment, Decrement,Reset}=useCounter(0) ;

  return (
    <>
    <div>Custom Hooks in React </div>
    <h2>count:{count}</h2>
    <button onClick={Increment}>Increment</button>
    <button onClick={Decrement}>Decrement</button>
    <button onClick={Reset}>Reset</button>
    </>
    )
}

export default App
