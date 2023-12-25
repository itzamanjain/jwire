import React from "react";

const Contact = () => {
  return (
    <>
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.5878372491534!2d84.90449614992308!3d24.53434040206216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ccde429f51c75%3A0x7cf34fc59ddcd1d4!2sJEEViKA%20Women%20Initiative%20Renewable%20Energy%20and%20Solution%20Pvt.%20Ltd%20(J-WiRES)!5e0!3m2!1sen!2sin!4v1703503509019!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex">
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <form action="#" className="max-w-md mx-auto p-6 bg-white rounded-md ">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>

          <label htmlFor="name" className="block text-gray-600 text-sm mb-2">Name:</label>
          <input type="text" id="name" name="name" className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-500" placeholder="Your Name" required />

          <label htmlFor="email" className="block text-gray-600 text-sm mb-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-500" placeholder="Your Email" required />

          <label htmlFor="message" className="block text-gray-600 text-sm mb-2">Message:</label>
          <textarea id="message" name="message" className="w-full border border-gray-300 p-2 rounded-md mb-4 focus:outline-none focus:border-blue-500" placeholder="Your Message" required></textarea>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Send Message
          </button>
        </form>
           </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
