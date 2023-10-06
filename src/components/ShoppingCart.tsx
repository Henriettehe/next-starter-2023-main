import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <button type="button" onClick={handleClick}>
        Like me
      </button>
    )
}