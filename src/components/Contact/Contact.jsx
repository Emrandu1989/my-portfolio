import emailjs from 'emailjs-com';
import React, { useState } from 'react';
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
      'service_0zagxd7',
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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
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
            <div className="mb-4">
              <input 
                type="text" 
                name="from_name" 
                placeholder="Your Name" 
                value={formData.from_name}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <input 
                type="email" 
                name="from_email" 
                placeholder="Your Email" 
                value={formData.from_email}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required 
              />
            </div>
            <div className="mb-4">
              <textarea 
                name="message" 
                placeholder="Your Message" 
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 mb-4 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
                required 
              ></textarea>
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
       </div>
     
         </>
    
  );
};

export default Contact;
