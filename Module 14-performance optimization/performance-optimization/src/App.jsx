//Bad Approach this is not optimised code 

/*import React, { useState } from "react";

function Child() {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
    </div>
  );
}

export default App;*/


// Correct way to write optimised code using memo

import React, { useState, memo } from "react";

const Child = memo(function Child() {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>

      <Child />
    </div>
  );
}

export default App;