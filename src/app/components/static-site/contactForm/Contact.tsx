import { ContactForm } from './ContactForm/ContactForm'
import { ContactDetails } from './contactDetails/ContactDetails'

export const Contact = () => {
  return (
    <section className="bg-darkBlack w-screen py-8 pb-16 lg:pt-24 md:py-16 md:px-8 lg:pb-32">
      <div className="flexRow gap-12">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  )
}
