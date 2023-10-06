'use client'

import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <aside>
        <button type="button" onClick={handleClick}>
            Legg til i handlevogn
        </button>
      </aside>
    )
}