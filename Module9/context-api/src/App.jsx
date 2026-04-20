// import React, { createContext,useState,useContext } from "react";

// const counterContext = createContext();

// function countContextProvider({children}){
//     const [count, setCount] = useState(0);
//   return(
//     <>
//       <counterContext.Provider value ={{count , setCount}}>
//         {children}
//       </counterContext.Provider>
//     </>
//   );
// }

// function Parent(){
//   return(
//     <countContextProvider>
//       <Value/>
//       <Increase/>
//       <Decrease/>
//     </countContextProvider>
//   );
// }


// function Value() {
//   const { count } = useContext(counterContext);
//   return (
//     <>
//       <h1>Count : {count}</h1>
//     </>
//   );
// }

// function Increase() {
//   const { count, setCount } = useContext(counterContext);
//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </>
//   );
// }

// function Decrease() {
//   const { count, setCount } = useContext(counterContext);
//   return (
//     <>
//       <button onClick={() => setCount(count - 1)}>Decrease</button>
//     </>
//   );
// }

// function App(){
//   return(
//     <div>
//       <h1>Counter App using Context Api</h1>
//       <Parent/>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { createContext, useContext } from "react";

// step 1- creating a context
const counterContext = createContext();

// step - 2 : create a context provider

function CountContextProvider({ children }) {
  const [count, setCount] = useState(0); // 0

  return (
    <>
      <counterContext.Provider value={{ count, setCount }}>
        {children}
      </counterContext.Provider>
    </>
  );
}

function Parent() {
  return (
    <CountContextProvider>
      <Value />
      <Increase />
      <Decrease />
    </CountContextProvider>
  );
}

// step 3 - consuming the logic in components

function Value() {
  const { count } = useContext(counterContext);

  return (
    <>
      <h1>Count : {count}</h1>
    </>
  );
}

function Increase() {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}

function Decrease() {
  const { count, setCount } = useContext(counterContext);

  return (
    <>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  );
}

function App() {
  return (
    <div>
      <h1>Counter app with context api </h1>
      <Parent />
    </div>
  );
}

export default App;