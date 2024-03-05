import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      {/* <p>bottom</p> */}
    </main>
  )
}
