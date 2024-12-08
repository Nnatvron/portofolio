import React, { useState } from "react";
import ContactCSS from "./../Contact/Contact.module.css";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/send-email", formData);
            alert("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
            alert("Failed to send email. Please try again.");
        }
    };

    return (
        <section id="contact">
            <div className={ContactCSS.contact}>
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </section>
    );
}

export default Contact;
