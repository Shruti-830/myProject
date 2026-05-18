// import React from "react"
// import Counter from "./component/Counter";

// function App(){

//   return(
//     <>
//       <h1>Redux Toolkit</h1>
//       <Counter/>
//     </>
//   );
// }

// export default App;

import React, { useState } from "react";

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

export default App;