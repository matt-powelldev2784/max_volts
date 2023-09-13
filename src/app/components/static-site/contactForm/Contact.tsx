import { ContactForm } from './ContactForm/ContactForm'
import { ContactDetails } from './contactDetails/ContactDetails'

export const Contact = () => {
  return (
    <section className="bg-darkBlack w-screen py-8 lg:pt-16 md:py-16 md:px-8 lg:pb-32">
      <div className="flexRow gap-16">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  )
}
