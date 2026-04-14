import React from "react";
import Styles from './Card.module.css'

function Card(){
  return(

    <div className={Styles.card}>
    <div className={Styles.content}>
        <h2 className={Styles.title}>Card Title</h2>
        <p className={Styles.description}>
          This is a simple card component using CSS Modules in React.
        </p>

        <button className={Styles.button}>Read More</button>
      </div>
    </div>
  )


}

export default Card;