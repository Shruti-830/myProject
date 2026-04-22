// import React, { useState } from "react";
// import { createContext, useContext } from "react";

// // step 1- creating a context
// const counterContext = createContext();

// // step - 2 : create a context provider

// function CountContextProvider({ children }) {
//   const [count, setCount] = useState(0); // 0

//   return (
//     <>
//       <counterContext.Provider value={{ count, setCount }}>
//         {children}
//       </counterContext.Provider>
//     </>
//   );
// }

// function Parent() {
//   return (
//     <CountContextProvider>
//       <Value />
//       <Increase />
//       <Decrease />
//     </CountContextProvider>
//   );
// }

// // step 3 - consuming the logic in components

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

// function App() {
//   return (
//     <div>
//       <h1>Counter app with context api </h1>
//       <Parent />
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import { createContext, useContext } from "react";

const userContext = createContext();

function UserContextProvider({children}){
  const userName="Shruti";
  return(
  <>
    <userContext.Provider value={userName}>
      {children}
    </userContext.Provider>
  </>
  )
}

function Parent (){
  return(
    <>
      <UserContextProvider>
        <Value/>
      </UserContextProvider>
    </>
  )
}

function Value(){
  const userName = useContext(userContext);
  return(
    <>
      <h1>User Name :{userName}</h1>
    </>
  )
}

function App() {
  return (
    <div>
      <h1>User app with context api </h1>
      <Parent />
    </div>
  );
}

export default App;