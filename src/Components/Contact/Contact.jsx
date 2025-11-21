// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useRef } from "react";
import ContactCSS from "./../Contact/Contact.module.css";
import axios from "axios";
import { User, MessageSquare, Pin, PinOff } from "lucide-react";
import { db } from "/src/firebaseConfig.js";
import {
  collection,
  addDoc,
  query,
  orderBy,
  onSnapshot,
  doc,
  setDoc,
} from "firebase/firestore";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [chatMessages, setChatMessages] = useState([]);
  const [pinnedMessage, setPinnedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const chatEndRef = useRef(null);

  // ======== LOAD MESSAGE REALTIME ========
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChatMessages(
        snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    });

    return () => unsubscribe();
  }, []);

  // ======== LOAD PINNED MESSAGE REALTIME ========
  useEffect(() => {
    const pinnedRef = doc(db, "system", "pinned");

    onSnapshot(pinnedRef, (snap) => {
      setPinnedMessage(snap.exists() ? snap.data() : null);
    });
  }, []);

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
    setIsLoading(true);

    const newMessage = {
      sender: formData.name || "Guest",
      text: formData.message,
      timestamp: Date.now(),
    };

    try {
      await addDoc(collection(db, "messages"), newMessage);

      // kirim email tetap berjalan
      await axios.post("http://localhost:5000/send-email", formData);

      setSuccess("Pesan berhasil dikirim!");
      setFormData({ name: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setSuccess("Pesan terkirim (tanpa email)");
    } finally {
      setIsLoading(false);
    }
  };



  const unpinMessage = async () => {
    await setDoc(doc(db, "system", "pinned"), {});
    setPinnedMessage(null);
  };

  return (
    <section id="contact" className={ContactCSS.contact}>
      <div className={ContactCSS.contact_container} data-aos="fade-right">

        <div className={ContactCSS.live_chat_section} data-aos="fade-down">
          <h2>Contact Me</h2>
        </div>

        <div className={ContactCSS.live_chat_wrapper}>

          {/* FORM */}
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

{/* CHAT */}
<div className={ContactCSS.live_chat_panel} data-aos="fade-left">
  <div className={ContactCSS.live_chat_header}>Live Chat</div>

  {/* ===== STATIC PINNED MESSAGE (TIDAK BISA DI UNPIN) ===== */}
  <div className={ContactCSS.stickyPinnedFixed}>
    <div className={ContactCSS.stickyPinnedContent}>
      <Pin size={14} className={ContactCSS.pinIcon} />
      <strong>Natravell Sitra:</strong> Selamat datang!👋 Thanks yang udah mampir!!
    </div>
  </div>

  {/* ===== FIREBASE PINNED MESSAGE (BISA DI PIN/UNPIN) ===== */}
  {pinnedMessage && pinnedMessage.text && (
    <div className={ContactCSS.stickyPinned}>
      <div className={ContactCSS.stickyPinnedContent}>
        <Pin size={14} className={ContactCSS.pinIcon} />
        <strong>{pinnedMessage.sender}: </strong> {pinnedMessage.text}
      </div>
      <button onClick={unpinMessage} className={ContactCSS.unpinTiny}>
        <PinOff size={14} />
      </button>
    </div>
  )}

  {/* ===== CHAT LIST ===== */}
  <div className={ContactCSS.live_chat_body}>
    {chatMessages.length === 0 ? (
      <p className={ContactCSS.chat_empty}>Belum ada pesan...</p>
    ) : (
      chatMessages.map((msg) => (
        <div
          key={msg.id}
          className={`${ContactCSS.chat_bubble} ${
            msg.sender === formData.name ? ContactCSS.chat_right : ContactCSS.chat_left
          }`}
        >
          <p className={ContactCSS.chat_sender}>{msg.sender}</p>
          <p className={ContactCSS.chat_text}>{msg.text}</p>
          <span className={ContactCSS.chat_time}>
            {new Date(msg.timestamp).toLocaleTimeString()}
          </span>


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
