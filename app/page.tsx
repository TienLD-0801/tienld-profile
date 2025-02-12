'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function MarvelStyleClock() {
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const formatTime = (num: number) => num.toString().padStart(2, '0');
  const hours = formatTime(time.getHours() % 12 || 12);
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= 12 ? 'PM' : 'AM';
  const date = time.toDateString();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 opacity-20 blur-2xl"></div>

      <motion.div
        className="text-2xl font-bold mb-4 tracking-wider text-red-400 uppercase"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        {date}
      </motion.div>

      <div className="flex space-x-2 text-9xl font-extrabold tracking-wider">
        <motion.div
          className="digit"
          animate={{ color: ['#ff0000', '#00ffcc', '#ffff00', '#ff00ff'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {hours}
        </motion.div>
        <motion.div className="text-gray-500">:</motion.div>
        <motion.div
          className="digit"
          animate={{ color: ['#00ffff', '#ff4500', '#008080', '#800080'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {minutes}
        </motion.div>
        <motion.div className="text-gray-500">:</motion.div>
        <motion.div
          className="digit"
          animate={{ color: ['#ffff00', '#ff1493', '#ff4500', '#00ffff'] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {seconds}
        </motion.div>
        <motion.div
          className="ml-4 text-5xl font-semibold text-red-400"
          animate={{ opacity: [0.5, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          {ampm}
        </motion.div>
      </div>

      <motion.button
        className="mt-10 px-10 py-4 bg-gradient-to-r from-red-600 to-blue-500 text-white text-xl font-extrabold rounded-lg shadow-md tracking-wider uppercase border border-white"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() => (window.location.href = '/portfolio')}
      >
        Get Started
      </motion.button>

      {/* CSS */}
      <style jsx>{`
        .digit {
          text-shadow: 0 0 15px #fff, 0 0 30px #ff00ff, 0 0 45px #00ffff;
        }
      `}</style>
    </div>
  );
}
