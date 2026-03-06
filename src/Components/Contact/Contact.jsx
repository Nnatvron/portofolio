// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
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
  setDoc
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
  const [typing, setTyping] = useState(false);

  // ===== REALTIME MESSAGE =====
  useEffect(() => {

    const q = query(
      collection(db, "messages"),
      orderBy("timestamp", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {

      const msgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setChatMessages(msgs);

    });

    return () => unsubscribe();

  }, []);

  // ===== REALTIME PINNED =====
  useEffect(() => {

    const pinnedRef = doc(db, "system", "pinned");

    return onSnapshot(pinnedRef, (snap) => {
      setPinnedMessage(snap.exists() ? snap.data() : null);
    });

  }, []);

  // ===== AUTO REMOVE SUCCESS =====
  useEffect(() => {

    if (success) {
      const timer = setTimeout(() => setSuccess(""), 4000);
      return () => clearTimeout(timer);
    }

  }, [success]);

  // ===== INPUT CHANGE =====
  const handleChange = (e) => {

    const { id, value } = e.target;

    setFormData({
      ...formData,
      [id]: value
    });

    if (success) setSuccess("");

  };

  // ===== SEND MESSAGE =====
  const handleSubmit = async (e) => {

    e.preventDefault();

    setSuccess("");
    setIsLoading(true);
    setTyping(true);

    const newMessage = {
      sender: formData.name || "Guest",
      text: formData.message,
      timestamp: new Date(),
    };

    try {

      await addDoc(collection(db, "messages"), newMessage);

      try {
        await axios.post(
          "http://localhost:5000/send-email",
          formData
        );
      } catch {
        console.warn("Email service offline — hanya Firebase");
      }

      setSuccess("Pesan berhasil dikirim!");

      setFormData({
        name: "",
        message: ""
      });

    } catch (error) {

      console.error("Firebase Error:", error);

      setSuccess("Terjadi kesalahan.");

    } finally {

      setIsLoading(false);

      setTimeout(() => {
        setTyping(false);
      }, 1000);

    }

  };

  // ===== UNPIN =====
  const unpinMessage = async () => {

    await setDoc(doc(db, "system", "pinned"), {});
    setPinnedMessage(null);

  };

  // ===== AVATAR =====
  const getAvatar = (name) => {
    return `https://api.dicebear.com/7.x/initials/svg?seed=${name}`;
  };

  return (

    <section id="contact" className={ContactCSS.contact}>

      <div className={ContactCSS.contact_container} data-aos="fade-right">

        <div className={ContactCSS.live_chat_section} data-aos="fade-down">
          <h2>Live Chat</h2>
        </div>

        <div className={ContactCSS.live_chat_wrapper}>

          {/* FORM */}
          <div className={ContactCSS.form_section}>

            {success && (
              <div className={ContactCSS.successMessage}>
                {success}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className={isLoading ? ContactCSS.loading : ""}
            >

              <label htmlFor="name">
                <User size={16}/> Name
              </label>

              <input
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />

              <label htmlFor="message">
                <MessageSquare size={16}/> Message
              </label>

              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />

              <button
                type="submit"
                disabled={isLoading}
              >
                {isLoading ? "Mengirim..." : "Kirim Pesan"}
              </button>

            </form>

          </div>

          {/* CHAT PANEL */}
          <div className={ContactCSS.live_chat_panel} data-aos="fade-left">

            <div className={ContactCSS.live_chat_header}>
              Live Chat
            </div>

            {/* STATIC PIN */}
            <div className={ContactCSS.stickyPinnedFixed}>
              <div className={ContactCSS.stickyPinnedContent}>
                <Pin size={14}/>
                <strong>Natravell Sitra:</strong>
                Selamat datang! 👋 Thanks yang udah mampir!!
              </div>
            </div>

            {/* FIREBASE PIN */}
            {pinnedMessage?.text && (

              <div className={ContactCSS.stickyPinned}>

                <div className={ContactCSS.stickyPinnedContent}>
                  <Pin size={14}/>
                  <strong>{pinnedMessage.sender}:</strong>
                  {pinnedMessage.text}
                </div>

                <button
                  onClick={unpinMessage}
                  className={ContactCSS.unpinTiny}
                >
                  <PinOff size={14}/>
                </button>

              </div>

            )}

            {/* CHAT BODY */}
            <div className={ContactCSS.live_chat_body}>

              {chatMessages.length === 0 ? (

                <p className={ContactCSS.chat_empty}>
                  Belum ada pesan...
                </p>

              ) : (

                chatMessages.map((msg) => (

                  <div
                    key={msg.id}
                    className={`${ContactCSS.chat_row}
                    ${
                      msg.sender === formData.name
                        ? ContactCSS.chat_right
                        : ContactCSS.chat_left
                    }`}
                  >

                    <img
                      src={getAvatar(msg.sender)}
                      alt="avatar"
                      className={ContactCSS.chat_avatar}
                    />

                    <div className={ContactCSS.chat_bubble}>

                      <p className={ContactCSS.chat_sender}>
                        {msg.sender}
                      </p>

                      <p className={ContactCSS.chat_text}>
                        {msg.text}
                      </p>

                    </div>

                  </div>

                ))

              )}

              {typing && (

                <div className={ContactCSS.chat_row}>

                  <img
                    src={getAvatar("typing")}
                    className={ContactCSS.chat_avatar}
                    alt="typing"
                  />

                  <div className={ContactCSS.typing_indicator}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Contact;