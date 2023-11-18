import React, {useState} from "react";
import "../styling/ContactUs.css";

export default function ContactUs() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div className="form-container"> 
        <h1 className="form-heading">
            Contact Me ! 
        </h1>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label> First Name </label>
                <input
                    type="text"
                    name="firstName"
                    value={FormData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    required
                />
            </div>
            <div className="form-group">
                <label> Last Name </label>
                <input
                    type="text"
                    name="lastName"
                    value={FormData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                />
            </div>
            <div className="form-group">
                <label> Email </label>
                <input
                    type="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    required
                />
            </div>
            <div className="form-group">            
                <label> Phone Number </label>
                <input
                    type="text"
                    name="phoneNumber"
                    value={FormData.phoneNumber}
                    onChange={handleChange}
                    placeholder="123456"
                    required
                />
            </div>
            <div className="form-group">
                <button type="submit">Contact ! </button>
            </div>
        </form>
    </div>
  )
}
