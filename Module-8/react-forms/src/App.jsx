import React,{useState} from "react";

function App(){

  const[username,setUsername]=useState("");
  const[password,setPassword]=useState("");
  const[email,setEmail]=useState("");
  const[address,setAddress]=useState("");

  const submitHander=(e)=>{
    e.preventDefault();
    console.log({username,password,email,address})
  }

  return(
    <>
    <h1>Forms in React</h1>
    <hr />

    <form onSubmit={submitHander}>
      <label htmlFor="username">Enter your Username : </label>
      <input type="text" placeholder="Enter your name" value={username} onChange={(e)=>{setUsername(event.target.value)}} />
      <br /><br />

      <label htmlFor="password">Enter your Password : </label>
      <input type="password" placeholder="Enter your Password " value={password} onChange={(e)=>{setPassword(event.target.value)}} />
      <br /><br />

       <label htmlFor="email">Enter your Email : </label>
      <input 
        type="email" 
        placeholder="Enter your Email "
        value={email} 
        onChange={(e)=>{setEmail(event.target.value)}} />
      <br /><br />

       <label htmlFor="address">Enter your Address : </label>
      <input 
        type="text" 
        placeholder="Enter your Address " 
        value={address} 
        onChange={(e)=>{setAddress(event.target.value)}} />
      <br /><br />

      <button>submit</button>
    </form>
    </>
  )
}

export default App;