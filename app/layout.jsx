import { Fredoka } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} antialiased`}>
        <Header />
        <PageTransition />
        <StairTransition />
        {children}
      </body>
    </html>
  );
}
