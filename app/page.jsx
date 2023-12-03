import ProductPage from "@/Components/mainpage/body/ProductPage/ProductPage";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <ProductPage />
    </>
  );
}
