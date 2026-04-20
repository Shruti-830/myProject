import React from "react"

function Student(props){
    return(
        <div style={{backgroundColor:"gray",padding: "4px" ,margin:"2px",width:"300px"}}>
        <h3>Name : {props.name}</h3>
        <h3>Age : {props.age}</h3>
        <p>Address : {props.address}</p>
        </div>
    );
}

export default Student 