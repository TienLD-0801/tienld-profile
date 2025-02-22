/* eslint-disable @next/next/no-img-element */
'use client';

import { useProgress } from '@react-three/drei';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.css';

export default function LoadingScreen() {
  const { progress } = useProgress();
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => {
      setFade(true);
    }, 2000);

    return () => clearTimeout(fadeOutTimeout);
  }, []);

  return (
    <div
      className="loading-screen"
      style={{ opacity: fade ? 0 : 1, transition: 'opacity 2s ease-in-out' }}
    >
      <div className="loader-card">
        <img src="./tienld.jpg" alt="TienLd's Mac" />
        <h3>TienLD</h3>
        <div className="progressbar-container">
          <div className="progressbar">
            <motion.div
              className="bar"
              animate={{
                width: `${progress}%`,
              }}
              transition={{
                duration: 1.8,
                delay: 0.1,
              }}
            />
          </div>
          <p>Please wait while we&apos;re setting up....</p>
        </div>
      </div>
    </div>
  );
}
