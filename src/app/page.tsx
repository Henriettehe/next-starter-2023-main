import Product from "@/components/Title";
import RootLayout from "./layout";
import "./globals.css"; 
import ShoppingCart from "@/components/ShoppingCart";
import Cards from "../../intro/components/Cards";

export default function Home() {
  return(
    <RootLayout>
      <Product />
      <ShoppingCart />
      <Cards />
    </RootLayout>
  )
}

