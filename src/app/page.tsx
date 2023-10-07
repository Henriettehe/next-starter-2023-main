import Product from "@/components/Title";
import RootLayout from "./layout";
import ProductInfo from "@/components/ProductInfo";
import "./globals.css"; 
import ShoppingCart from "@/components/ShoppingCart";
import Shoes from "@/components/Shoes";

export default function Home() {
  return(
    <RootLayout>
      <Product />
      <ProductInfo />
      <ShoppingCart />
      <Shoes />
    </RootLayout>
  )
}

