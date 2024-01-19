import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./styles.css";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Validate form fields
    const formData = new FormData(form.current);
    const requiredFields = ["from_name", "user_email", "subject", "message"];
    let formIsValid = true;

    requiredFields.forEach((field) => {
      if (formData.get(field) === "") {
        formIsValid = false;
        // Show error toast for empty field
        toast.error(`Please fill in the ${field.replace("_", " ")}`, {
          position: toast.POSITION.TOP_CENTER,
        });
      }
    });

    if (formIsValid) {
      try {
        const result = await emailjs.sendForm(
          "service_wyqt0zi",
          "template_5ng00mu",
          form.current,
          "Bv9GqaewcLyz6ipOE"
        );
        console.log(result.text);
        // Show success toast
        toast.success("Message sent successfully!", {
          position: toast.POSITION.TOP_CENTER,
        });
      } catch (error) {
        console.log(error.text);
        // Show error toast
        toast.error("Error sending message. Please try again later.", {
          position: toast.POSITION.TOP_CENTER,
        });
      } finally {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };

  return (
    <section className="contact container mx-auto p-4 md:p-10 bg-gray-100" id="contact">
    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-8 text-center">
      Get In Touch
    </h2>
  
    <div className="flex flex-col md:flex-row md:gap-12">
      <div className="md:w-1/2 h-64 md:h-auto overflow-hidden mb-4 md:mb-0 shadow-lg rounded-lg">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3629.5878372491534!2d84.90449614992308!3d24.53434040206216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398ccde429f51c75%3A0x7cf34fc59ddcd1d4!2sJEEViKA%20Women%20Initiative%20Renewable%20Energy%20and%20Solution%20Pvt.%20Ltd%20(J-WiRES)!5e0!3m2!1sen!2sin!4v1703503509019!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <form ref={form} onSubmit={sendEmail} className="contact__form border p-6 rounded shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                type="text"
                name="from_name"
                className="w-full py-2 px-4 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-400"
                placeholder="Your Full Name*"
              />
            </div>
            <div>
              <input
                type="email"
                name="user_email"
                className="w-full py-2 px-4 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-400"
                placeholder="Email*"
              />
            </div>
          </div>
  
          <div className="mb-4">
            <input
              type="text"
              name="subject"
              className="w-full py-2 px-4 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-400"
              placeholder="Subject*"
            />
          </div>
  
          <div className="mb-4">
            <textarea
              name="message"
              cols="30"
              rows="6"
              className="w-full py-2 px-4 border border-gray-300 rounded mb-2 focus:outline-none focus:border-blue-400"
              placeholder="Message*"
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  </section>
  
  );
};

export default Contact;
