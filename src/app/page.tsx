import {
  NavBar,
  Hero,
  About,
  Services,
  Footer,
  Contact,
} from '@/app/components/static-site'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Contact />
      <Footer />
    </>
  )
}
