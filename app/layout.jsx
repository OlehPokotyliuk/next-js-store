import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/store/Provider/ReduxProvider";
import Navigation from "@/Components/mainpage/body/Navigation/Navigation";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={inter.className}>
          <Navigation ></Navigation>
          {children}
        </body>
      </ReduxProvider>
    </html>
  );
}
