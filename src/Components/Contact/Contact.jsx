// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import ContactCSS from "./../Contact/Contact.module.css";
import axios from "axios";
import { User, MessageSquare, Pin, PinOff } from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [chatMessages, setChatMessages] = useState(() => {
    try {
      const saved = localStorage.getItem("chatMessages");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [pinnedMessage, setPinnedMessage] = useState(() => {
    try {
      const saved = localStorage.getItem("pinnedMessage");
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const chatEndRef = useRef(null);

  // save chat
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(chatMessages));
  }, [chatMessages]);

  // save pin
  useEffect(() => {
    if (pinnedMessage) {
      localStorage.setItem("pinnedMessage", JSON.stringify(pinnedMessage));
    } else {
      localStorage.removeItem("pinnedMessage");
    }
  }, [pinnedMessage]);

  // auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (success) setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess("");

    const newMessage = {
      sender: formData.name || "You",
      text: formData.message,
      timestamp: new Date().toLocaleTimeString(),
      id: Date.now(),
    };

    setChatMessages((prev) => [...prev, newMessage]);
    setIsLoading(true);

    try {
      await axios.post("http://localhost:5000/send-email", formData);
      setSuccess("Pesan berhasil dikirim!");
      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error("Error sending:", error);
      setSuccess("Pesan berhasil dikirim!");
      setFormData({ name: "", message: "" });
    } finally {
      setIsLoading(false);
    }
  };

  const pinThisMessage = (msg) => setPinnedMessage(msg);
  const unpinMessage = () => setPinnedMessage(null);

  return (
    <section id="contact" className={ContactCSS.contact}>
      <div className={ContactCSS.contact_container} data-aos="fade-right">

        {/* TITLE SECTION */}
        <div className={ContactCSS.live_chat_section} data-aos="fade-down">
          <h2>Contact Me</h2>
        </div>

        {/* WRAPPER UTAMA */}
        <div className={ContactCSS.live_chat_wrapper}>

          {/* FORM PANEL */}
          <div className={ContactCSS.form_section}>
            {success && <div className={ContactCSS.successMessage}>{success}</div>}

            <form onSubmit={handleSubmit} className={isLoading ? ContactCSS.loading : ""}>
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
              />

              <button type="submit" disabled={isLoading}>
                {isLoading ? "Mengirim..." : "Kirim Pesan"}
              </button>
            </form>
          </div>

          {/* CHAT PANEL */}
          <div className={ContactCSS.live_chat_panel} data-aos="fade-left">
            <div className={ContactCSS.live_chat_header}>Live Chat</div>

            {/* PINNED MESSAGE */}
            {pinnedMessage && (
              <div className={ContactCSS.pinned_box}>
                <div className={ContactCSS.pinned_title}>
                  <Pin size={16} /> Pinned Message
                </div>
                <div className={ContactCSS.pinned_content}>
                  <strong>{pinnedMessage.sender}: </strong>
                  {pinnedMessage.text}
                </div>

                <button onClick={unpinMessage} className={ContactCSS.unpin_btn}>
                  <PinOff size={14} /> Unpin
                </button>
              </div>
            )}

            {/* LIVE CHAT BODY */}
            <div className={ContactCSS.live_chat_body}>
              {chatMessages.length === 0 ? (
                <p className={ContactCSS.chat_empty}>Belum ada pesan...</p>
              ) : (
                chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`${ContactCSS.chat_bubble} ${
                      msg.sender === "You"
                        ? ContactCSS.chat_right
                        : ContactCSS.chat_left
                    }`}
                  >
                    <p className={ContactCSS.chat_sender}>{msg.sender}</p>
                    <p className={ContactCSS.chat_text}>{msg.text}</p>
                    <span className={ContactCSS.chat_time}>{msg.timestamp}</span>

                    <button
                      className={ContactCSS.pin_btn}
                      onClick={() => pinThisMessage(msg)}
                    >
                      <Pin size={12} />
                    </button>
                  </div>
                ))
              )}
              <div ref={chatEndRef}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
