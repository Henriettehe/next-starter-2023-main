'use client'  // Fikk noe hjelp med use client, var noe som manglet for å få alt til å fungere. 
import React from "react"; 

export default function ShoppingCart() {

    const handleClick = () => {
        console.log("Lagt til i handlekurv")
    }

    return(
        <section className="bg-slate-700 py-4 hover:py-8 pl-px">
            {/* Etter mye prøving og feiling med TailWindcss, fant jeg og ChatGPt en super løsning, for å endre tekstfargen til hvit! Mission solved! Vet ikke om dette er 'best practice' og ha style={diverse css styling} - men var litt kult at det er mulig sånn og! */}
        <button type="button" onClick={handleClick} style={{ color: "white", padding: "8px 16px", borderRadius: "0.rem"}} className="font-bold px-4 py-2 rounded-lg">
            Legg til i handlevogn
        </button>
      </section>
    )
}