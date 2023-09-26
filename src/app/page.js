

import Image from "next/image";
import Nav from "./components/navigation/Nav";
import Login_box from "./components/login/login_box";
import { Poppins } from "next/font/google";
import Link from 'next/link'

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <main className={poppins.className}>
      <Nav />
      <Login_box />

     
    </main>
  );
}
