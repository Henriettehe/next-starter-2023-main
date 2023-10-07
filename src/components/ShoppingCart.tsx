'use client'  // Fikk noe hjelp med use client, var noe som manglet for å få alt til å fungere. 

import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <button className="bg-slate-700" onClick={handleClick} >
            Legg til i handlevogn
        </button>
    )
}