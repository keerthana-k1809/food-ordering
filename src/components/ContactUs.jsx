import React from 'react'


const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-4 text-blue-600">Contact Us</h1>
      <p className="text-lg mb-6 text-gray-700">
        We'd love to hear from you! Feel free to reach out using the details below.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-80 text-center">
        <p><strong>Email:</strong> support@foodapp.com</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p><strong>Address:</strong> Chennai, India</p>
      </div>
    </div>
  );
};



  

export default ContactUs