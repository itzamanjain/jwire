import React from "react";

const Contact = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row mt-8 mb-12 bg-gray-100 p-8 rounded-lg  gap-11" id="contact">
      {/* Map Section */}
      <div className="md:w-1/2 h-96 md:h-auto overflow-hidden mb-4 md:mb-0 shadow-lg">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.5878372491534!2d84.90449614992308!3d24.53434040206216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ccde429f51c75%3A0x7cf34fc59ddcd1d4!2sJEEViKA%20Women%20Initiative%20Renewable%20Energy%20and%20Solution%20Pvt.%20Ltd%20(J-WiRES)!5e0!3m2!1sen!2sin!4v1703503509019!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Form Section */}
      <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h2>

        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
