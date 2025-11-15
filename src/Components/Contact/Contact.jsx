// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import ContactCSS from "./../Contact/Contact.module.css";
import axios from "axios";
import { Mail, User, MessageSquare } from "lucide-react";

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
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Auto-hide success message
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  // Handle input perubahan
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (error) setError("");
    if (success) setSuccess("");
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateEmail(formData.email)) {
      setError("Format email tidak valid");
      return;
    }

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
    <section id="contact" className={ContactCSS.contact}>
      {/* Container tengah */}
      <div className={ContactCSS.contact_container}>
        <h2 data-aos="fade-down" data-aos-duration="1000">
          Contact Me
        </h2>

        {/* Pesan error / sukses */}
        {error && (
          <div
            className={ContactCSS.errorMessage}
            data-aos="fade-down"
            data-aos-duration="1500"
          >
            {error}
          </div>
        )}
        {success && (
          <div
            className={ContactCSS.successMessage}
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            {success}
          </div>
        )}

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className={isLoading ? ContactCSS.loading : ""}
          data-aos="fade-up"
          data-aos-duration="2500"
        >
          <label htmlFor="name">
            <User size={16} /> Name:
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />

          <label htmlFor="email">
            <Mail size={16} /> Email:
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isLoading}
          />

          <label htmlFor="message">
            <MessageSquare size={16} /> Message:
          </label>
          <textarea
            id="message"
            placeholder="Enter your message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isLoading}
          ></textarea>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Mengirim..." : "Kirim Pesan"}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
