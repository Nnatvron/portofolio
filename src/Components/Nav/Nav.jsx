import React, { useState, useEffect, useRef } from "react";
import {
  FaSpotify,
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";
import styles from "./Nav.module.css";

export default function Nav() {
  const [active, setActive] = useState("#home");
  const [isOpen, setIsOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [spotifyOpen, setSpotifyOpen] = useState(false);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(null);

  const tracks = [
    { title: "Dave - Raindance (feat. Tems)", src: "/music/Dave - Raindance (feat. Tems).mp3" },
  ];

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Skills", href: "#skills" },
    { label: "About", href: "#about" },
    { label: "Project", href: "#service" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    setVisible(true);
    window.scrollTo(0, 0);
    setActive("#home");
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack]);

  const togglePlay = (e) => {
    e.stopPropagation(); // ⛔ cegah nutup
    setIsPlaying((prev) => !prev);
  };

  const nextTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };

  const prevTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) =>
      prev === 0 ? tracks.length - 1 : prev - 1
    );
    setIsPlaying(true);
  };

  const toggleSpotify = () => {
    setSpotifyOpen((prev) => !prev);
  };

  return (
    <header className={`${styles.header} ${visible ? styles.slideDown : ""}`}>
      <div className={styles.navWrapper}>
        
        {/* Spotify Expand Circle */}
        <div
          className={`${styles.leftCircle} ${
            spotifyOpen ? styles.expanded : ""
          }`}
          onClick={toggleSpotify}
        >
          <FaSpotify className={styles.spotifyIcon} />

          {/* Mini Player */}
          {spotifyOpen && (
            <div
              className={styles.player}
              onClick={(e) => e.stopPropagation()} // ⛔ cegah semua klik dalam player
            >
              <div className={styles.trackTitle}>
                {tracks[currentTrack].title}
              </div>

              <div className={styles.controls}>
                <FaStepBackward onClick={prevTrack} />

                {isPlaying ? (
                  <FaPause onClick={togglePlay} />
                ) : (
                  <FaPlay onClick={togglePlay} />
                )}

                <FaStepForward onClick={nextTrack} />
              </div>

              <audio
                ref={audioRef}
                src={tracks[currentTrack].src}
                onEnded={() =>
                  setCurrentTrack((prev) => (prev + 1) % tracks.length)
                }
              />
            </div>
          )}
        </div>

        <nav className={styles.pillNav}>
          <span className={styles.navTitle}>Natrxx.</span>

          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.pill} ${
                active === item.href ? styles.active : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}