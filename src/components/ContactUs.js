import React, { useState } from 'react';
import '../styling/ContactUs.css';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="form-container">
        <h1 className="form-heading">Get in touch</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Your Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit">Contact Us</button>
          </div>
        </form>
      </div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <ul>
          <li>Address: 1234 Example St, City, Country</li>
          <li>Phone: (123) 456-7890</li>
          <li>Email: contact@example.com</li>
        </ul>
      </div>
    </div>
  );
}
