import Image from 'next/image'
import Hero from './components/hero'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Projects from './components/projects'

export default function Home() {
  
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>
      <Footer></Footer>
    </main>
  )
}
