import { Outfit } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { Toaster } from "../components/ui/sonner";
const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Three Sky",
  description: "Your own real estate palace !",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Provider>
         <Toaster />
         {children}
        </Provider>
       </body>
    </html>

  );
}
