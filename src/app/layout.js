import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "./components/navigation/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Job portal",
  description: "Job portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
