import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <aside>
        <button onClick={handleClick}>Legg til handlekurv</button>
        </aside>
    )
}