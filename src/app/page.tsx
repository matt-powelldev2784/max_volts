import {
  NavBar,
  Hero,
  About,
  Services,
  Footer,
  ContactForm,
} from '@/app/components/static-site'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <ContactForm />
      <Footer />
    </>
  )
}
