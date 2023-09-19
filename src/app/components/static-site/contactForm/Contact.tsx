import { ContactForm } from './ContactForm/ContactForm'
import { ContactDetails } from './contactDetails/ContactDetails'

export const Contact = () => {
  return (
    <section
      className="bg-darkBlack w-screen py-8 pb-16 lg:pt-24 md:py-16 md:px-8 lg:pb-32"
      id="contact"
    >
      <div className="flexRow gap-12 min-w-[320px]">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  )
}
