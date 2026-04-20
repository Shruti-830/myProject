import React from "react"

function Student(props){
    return(
        <div style={{backgroundColor:"yellow",padding: "6px" ,margin:"2px",width :"300px",alignItems:"center"}}>
        <h3>Name : {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <p>Address : {props.profession}</p>
        </div>
    );
}

export default Student 