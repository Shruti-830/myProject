import React, { useState } from "react";

function Parent() {
  const [count, setCount] = useState(0); // parent logic 

  return (

    // child functions 

    <div>
      <Count count={count} setCount={setCount} />
      <Increment count={count} setCount={setCount} />
      <Decrement count={count} setCount={setCount} />
      <Reset count={count} setCount={setCount} />
    </div>
  );
}

function Count({ count }) {
  return (
    <div>
      <p>Count : {count}</p>
    </div>
  );
}

function Increment({ count, setCount }) {
  return (
    <div>
      <button onClick={()=> setCount(count + 1)}>Increase</button>
    </div>
  );
}

function Decrement({ count, setCount }) {
  return (
    <div>
      <button onClick={()=>setCount(count - 1)}>Decrease</button>
    </div>
  );
}

function Reset({ count, setCount }) {
  return (
    <div>
      <button onClick={()=>setCount(0)}>Reset</button>
    </div>
  );
}

export default Parent;