import "./globals.css"; 
import Cards from "../../intro/components/Cards";


export default function Home() {
  return(
    // Funnet kode og hentet kode innstallert next-prosjektet + fra page :) 
    <main className="flex min-h-screen flex-col items-center justify-between p-20 gap-5">
      <div className="z-10 max-w-5xl w-full items-center text-sm lg:flex flex-wrap gap-5 p-5">
      <Cards />
    </div>
    </main>
  )
} 

