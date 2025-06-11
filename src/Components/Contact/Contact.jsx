import React, { useState, useEffect } from "react";
import ContactCSS from "./../Contact/Contact.module.css";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    // Validasi email
    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Auto-hide success message setelah 5 detik
    useEffect(() => {
        if (success) {
            const timer = setTimeout(() => {
                setSuccess("");
            }, 5000);
            
            return () => clearTimeout(timer);
        }
    }, [success]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // Clear messages saat user mengetik
        if (error) setError("");
        if (success) setSuccess("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        
        // Validasi email sebelum kirim
        if (!validateEmail(formData.email)) {
            setError("Format email tidak valid");
            return;
        }

        // Validasi panjang pesan minimum
        if (formData.message.trim().length < 10) {
            setError("Pesan harus minimal 10 karakter");
            return;
        }
        
        setIsLoading(true);
        
        try {
            await axios.post("http://localhost:5000/send-email", formData);
            setSuccess("Email berhasil dikirim!");
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("Error sending email:", error);
            setError("Gagal mengirim email. Silakan coba lagi.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact">
            <div className={ContactCSS.contact}>
                <h2>Contact Me</h2>
                
                {/* Tampilkan pesan error/success */}
                {error && <div className={ContactCSS.errorMessage}>{error}</div>}
                {success && <div className={ContactCSS.successMessage}>{success}</div>}
                
                <form 
                    onSubmit={handleSubmit}
                    className={isLoading ? ContactCSS.loading : ''}
                >
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                    
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        placeholder="Enter Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={isLoading}
                    ></textarea>
                    
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Mengirim..." : "Kirim"}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Contact;