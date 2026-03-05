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
  const [visible, setVisible] = useState(false);
  const [spotifyOpen, setSpotifyOpen] = useState(false);

  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(new Date());
  const [prevTime, setPrevTime] = useState(new Date());

  const audioRef = useRef(null);

  const tracks = [
    { title: "Dave - Raindance (feat. Tems)", src: "/music/Dave - Raindance (feat. Tems).mp3" },
    { title: "Avicii - Levels", src: "/music/Avicii - Levels.mp3" },
    { title: "Calvin Harris - Outside ft. Ellie Goulding", src: "/music/Calvin Harris - Outside ft. Ellie Goulding.mp3" },
    { title: "CHRYSTAL - THE DAYS (NOTION REMIX).", src: "/music/CHRYSTAL - THE DAYS (NOTION REMIX).mp3" },
    { title: "DJ Snake ft. Justin Bieber - Let Me Love You", src: "/music/DJ Snake ft. Justin Bieber - Let Me Love You.mp3" },
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

    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentTrack]);

  // Update clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setPrevTime(time);
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const formatTwoDigits = (num) => num.toString().padStart(2, "0");

  // Extract digits
  const hours = formatTwoDigits(time.getHours());
  const minutes = formatTwoDigits(time.getMinutes());
  const seconds = formatTwoDigits(time.getSeconds());
  const prevHours = formatTwoDigits(prevTime.getHours());
  const prevMinutes = formatTwoDigits(prevTime.getMinutes());
  const prevSeconds = formatTwoDigits(prevTime.getSeconds());

  const togglePlay = (e) => {
    e.stopPropagation();
    setIsPlaying((prev) => !prev);
  };
  const nextTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) => (prev + 1) % tracks.length);
    setIsPlaying(true);
  };
  const prevTrack = (e) => {
    e.stopPropagation();
    setCurrentTrack((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    setIsPlaying(true);
  };
  const toggleSpotify = () => setSpotifyOpen((prev) => !prev);

  return (
    <header className={`${styles.header} ${visible ? styles.slideDown : ""}`}>
      <div className={styles.navWrapper}>

        {/* Spotify Circle */}
        <div className={`${styles.leftCircle} ${spotifyOpen ? styles.expanded : ""}`} onClick={toggleSpotify}>
          <FaSpotify className={styles.spotifyIcon} />
          {spotifyOpen && (
            <div className={styles.player} onClick={(e) => e.stopPropagation()}>
              <div className={styles.trackTitle}>{tracks[currentTrack].title}</div>
              <div className={styles.controls}>
                <FaStepBackward onClick={prevTrack} />
                {isPlaying ? <FaPause onClick={togglePlay} /> : <FaPlay onClick={togglePlay} />}
                <FaStepForward onClick={nextTrack} />
              </div>
              <audio
                ref={audioRef}
                src={tracks[currentTrack].src}
                onEnded={() => setCurrentTrack((prev) => (prev + 1) % tracks.length)}
              />
            </div>
          )}
        </div>

        {/* Pill Nav */}
        <nav className={styles.pillNav}>
          <span className={styles.navTitle}>Natrxx.</span>
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`${styles.pill} ${active === item.href ? styles.active : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Clock Horizontal */}
        <div className={styles.clockWrapper}>
          <div className={styles.clockItem}>
            <span className={`${hours[0] !== prevHours[0] ? styles.roll : ""}`}>{hours[0]}</span>
            <span className={`${hours[1] !== prevHours[1] ? styles.roll : ""}`}>{hours[1]}</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.clockItem}>
            <span className={`${minutes[0] !== prevMinutes[0] ? styles.roll : ""}`}>{minutes[0]}</span>
            <span className={`${minutes[1] !== prevMinutes[1] ? styles.roll : ""}`}>{minutes[1]}</span>
          </div>
          <span className={styles.separator}>:</span>
          <div className={styles.clockItem}>
            <span className={`${seconds[0] !== prevSeconds[0] ? styles.roll : ""}`}>{seconds[0]}</span>
            <span className={`${seconds[1] !== prevSeconds[1] ? styles.roll : ""}`}>{seconds[1]}</span>
          </div>

          <div className={styles.dateText}>
            {time.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })}
          </div>
        </div>

      </div>
    </header>
  );
}