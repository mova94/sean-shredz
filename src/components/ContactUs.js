import React from "react";
import "../styling/ContactUs.css";

export default function ContactUs() {

    const handleChange = () => {
        console.log("im handleChange")
    }

    const handleSubmit = () => {
        console.log("im handleSubmit")
    }

  return (
    <div className="form-container"> 
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label> First Name
                <input
                    type="text"
                    name="firstName"
                    value={FormData.firstName}
                    placeholder="John"
                    required
                />
                </label>
            </div>
            <div className="form-group">
                <label> Last Name
                <input
                    type="text"
                    name="lastName"
                    value={FormData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    required
                />
                </label>
            </div>
            <div className="form-group">
                <label> Email
                <input
                    type="email"
                    name="email"
                    value={FormData.email}
                    onChange={handleChange}
                    placeholder="johndoe@gmail.com"
                    required
                />
                </label>
            </div>
            <div className="form-group">            
                <label> Phone Number
                <input
                    type="number"
                    name="firstName"
                    value={FormData.name}
                    onChange={handleChange}
                    placeholder="John"
                    required
                />
                </label>
            </div>

            <button type="submit">Contact ! </button>
        </form>
    </div>
  )
}
