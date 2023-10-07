'use client'  // Fikk noe hjelp med use client, var noe som manglet for å få alt til å fungere. 

import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <section className="bg-slate-700 text-[color:white] py-4 hover:py-8">
        <button type="button" onClick={handleClick}>
            Legg til i handlevogn
        </button>
      </section>
    )
}