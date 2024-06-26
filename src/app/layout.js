import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nampellah Portfolio",
  description: "Where Design meet Codes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{fontFamily:"Poppins"}} className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
