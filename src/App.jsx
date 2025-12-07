// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader"; // pastikan path sesuai
import Nav from "./Components/Nav/Nav";
import Header from "./Components/Header/Header";
import StatsAndTechStack from "./Components/Skills/StatsAndTechStack";
import About from "./Components/About/About";
import Service from "./Components/Service/Service";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sesuaikan durasi dengan animasi fadeOut loader
    const timer = setTimeout(() => setLoading(false), 2100); // 2.1s
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <>
          {/* 🔝 Navbar & Header */}
          <Nav />
          <Header />

          {/* 🔧 Bagian utama */}
          <main>
            <section className="section-wrapper">
              <StatsAndTechStack />
            </section>

            <section className="section-wrapper">
              <About />
            </section>

            <section className="section-wrapper">
              <Service />
            </section>

            <section className="section-wrapper">
              <Contact />
            </section>
          </main>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
