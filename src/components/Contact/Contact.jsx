import emailjs from 'emailjs-com';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_b4xfnen',
      'template_rc90exe',
      formData,
      'cMEPgwgK4fbdJWZZz'
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again later.');
    });

    setFormData({
      from_name: '',
      from_email: '',
      message: ''
    });
  };

  return (
    <>
      <NavBar />
      <motion.div // Wrap the entire content in a motion.div for page-level animations
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
       
        exit={{ opacity: 0 }} // Animation state when component unmounts
        transition={{ duration: 0.5 }} // Animation duration
        className="flex justify-center items-center min-h-screen"
      >
        <motion.div // Apply animations to the form container
          initial={{ y: -100, opacity: 0 }} // Initial animation state (off-screen and hidden)
          animate={{ y: 0, opacity: 1 }} // Animation state when component mounts
          transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
          className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"
        >
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
            <p className="text-gray-600 mb-4">Feel free to reach out through the form below or through my social profiles.</p>
            <div className="space-y-2">
              <p><strong>Email:</strong> emrandu1989@gmail.com</p>
              <p><strong>LinkedIn:</strong> <a className="text-blue-500" href="https://www.linkedin.com/in/md-emran-hossain-659012314">Profile</a></p>
              <p><strong>Facebook:</strong> <a className="text-blue-500" href="https://www.facebook.com/Emrandu1989">Profile</a></p>
              <p><strong>GitHub:</strong> <a className="text-blue-500" href="https://github.com/Emrandu1989">Profile</a></p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <motion.div // Apply animations to the form inputs
                initial={{ opacity: 0 }} // Initial animation state (hidden)
                animate={{ opacity: 1 }} // Animation state when component mounts
                transition={{ duration: 0.5, delay: 0.4 }} // Animation duration and delay
                className="mb-4"
              >
                <input 
                  type="text" 
                  name="from_name" 
                  placeholder="Your Name" 
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  required 
                />
              </motion.div>
              <motion.div // Apply animations to the form inputs
                initial={{ opacity: 0 }} // Initial animation state (hidden)
                animate={{ opacity: 1 }} // Animation state when component mounts
                transition={{ duration: 0.5, delay: 0.5 }} // Animation duration and delay
                className="mb-4"
              >
                <input 
                  type="email" 
                  name="from_email" 
                  placeholder="Your Email" 
                  value={formData.from_email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  required 
                />
              </motion.div>
              <motion.div // Apply animations to the form inputs
                initial={{ opacity: 0 }} // Initial animation state (hidden)
                animate={{ opacity: 1 }} // Animation state when component mounts
                transition={{ duration: 0.5, delay: 0.6 }} // Animation duration and delay
                className="mb-4"
              >
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                  required 
                ></textarea>
              </motion.div>
              <motion.div // Apply animations to the submit button
                initial={{ opacity: 0 }} // Initial animation state (hidden)
                animate={{ opacity: 1 }} // Animation state when component mounts
                transition={{ duration: 0.5, delay: 0.7 }} // Animation duration and delay
                className="text-center"
              >
                <button 
                  type="submit" 
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Send Message
                </button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default Contact;
