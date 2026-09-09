import React, { useEffect, useRef, useState } from "react";
import "./VideoShowcase.css";

const VIDEO_URL =
  "https://res.cloudinary.com/dsewg9nlw/video/upload/v1788960528/WhatsApp_Video_2026-09-09_at_11.42.44_AM_w5yt0i.mp4";

const VideoShowcase = () => {
  const stageRef = useRef(null);
  const videoRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [playing, setPlaying] = useState(false);

  // Watch when the stage scrolls into view so we can auto-play the video
  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio > 0.35);
      },
      { threshold: 0.35 }
    );

    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  // Track the real play/pause state from video events
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  // Auto-play muted (browsers block unmuted autoplay) while in view
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (inView) {
      video.muted = !soundOn;
      try {
        void video.play();
      } catch {
        /* autoplay blocked - user can press play */
      }
    } else {
      video.pause();
    }
  }, [inView, soundOn]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      video.muted = !soundOn;
      void video.play();
    } else {
      video.pause();
    }
  };

  return (
    <section className="video-showcase" ref={stageRef}>
      <div className="video-showcase-shell">
        <header className="video-showcase-heading">
          <span className="video-showcase-kicker">Watch &amp; feel</span>
          <h2 className="video-showcase-title">ZOZAC in Motion</h2>
          <p className="video-showcase-intro">
            Scroll down and let the story play itself. This film auto-plays the
            moment it enters your view - tap the speaker to hear the sound.
          </p>
        </header>

        <div className="video-showcase-stage">
          <video
            ref={videoRef}
            className="video-showcase-media"
            src={VIDEO_URL}
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="ZOZAC Community video"
          ></video>

          <div className="video-showcase-scrim" aria-hidden="true"></div>

          <button
            type="button"
            className="video-showcase-play"
            onClick={togglePlay}
            aria-label={playing ? "Pause video" : "Play video"}
          >
            {playing ? (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="4" width="4" height="16" rx="1" />
                <rect x="14" y="4" width="4" height="16" rx="1" />
              </svg>
            ) : (
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 6 L6 18 M6 12 L18 12" stroke="currentColor" strokeWidth="2" />
              </svg>
            )}
          </button>

          <div className="video-showcase-status">
            {playing ? (
              <span className="video-showcase-pill video-showcase-pill--live">
                <span className="video-showcase-dot" aria-hidden="true" />
                Playing
              </span>
            ) : (
              <span className="video-showcase-pill">Paused - scroll to play</span>
            )}
          </div>

          <button
            type="button"
            className="video-showcase-sound"
            onClick={() => setSoundOn((s) => !s)}
            aria-pressed={soundOn}
            aria-label={soundOn ? "Mute video" : "Unmute video"}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3 9 L5 7 L7 5 L8 6 L10 4 L12 2 L13 5 L15 7 L17 9 L18 8 L19 10 L21 8 L3 12 L5 14 L7 16 L10 18 L12 20 L13 17 L15 15 L17 13 L19 15 L21 17" />
              {soundOn && <path d="M11 20 L20 20" stroke="currentColor" strokeWidth="1.6" />}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;