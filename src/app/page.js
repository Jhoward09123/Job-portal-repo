

import Nav from "./components/navigation/Nav";
import Loginbox from "./components/login/Loginbox";
import { Poppins } from "next/font/google";


const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


export default function Home() {
  return (
    <main className={poppins.className}>
      <Nav />
      <Loginbox />
    </main>
  );
}
