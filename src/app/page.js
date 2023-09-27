



import { Poppins } from "next/font/google";
import HomePage from "./components/HomePage/HomePage"

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <main className={poppins.className}>
    
      <HomePage />
    </main>
  );
}
