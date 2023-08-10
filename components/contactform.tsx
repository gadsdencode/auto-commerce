import React from "react";
export const ContactForm = () => {
    return (
      <>
  {/* Using the Tailwind CSS framework as specified in globals.css for a darker theme */}
  <section className="container mx-auto px-4 bg-gray-900 text-gray-300">
    <footer id="footer" className="bg-gray-800 mt-4 p-4">
      <div className="inner">
        {/* Heading for the contact section */}
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        {/* Contact form */}
        <form action="#" method="post">
          {/* Name input field */}
          <div className="field mb-4">
            <label htmlFor="name" className="block text-xl mb-2">
              Name
            </label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              className="border border-gray-700 bg-gray-700 rounded w-full py-2 px-3 text-gray-300"
            />
          </div>
          {/* Email input field */}
          <div className="field mb-4">
            <label htmlFor="email" className="block text-xl mb-2">
              Email
            </label>
            <input
              name="email"
              id="email"
              type="email"
              placeholder="Email"
              className="border border-gray-700 bg-gray-700 rounded w-full py-2 px-3 text-gray-300"
            />
          </div>
          {/* Message textarea field */}
          <div className="field mb-4">
            <label htmlFor="message" className="block text-xl mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              placeholder="Message"
              className="border border-gray-700 bg-gray-700 rounded w-full py-2 px-3 text-gray-300"
              defaultValue={""}
            />
          </div>
          {/* Submit button */}
          <ul className="actions">
          <li>
              <input
                defaultValue="Send Message"
                className="button alt bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
                type="submit"
              />
            </li>
          </ul>
        </form>
      </div>
    </footer>
  </section>
</>
    )}