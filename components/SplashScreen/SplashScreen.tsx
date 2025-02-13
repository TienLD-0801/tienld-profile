'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { DATE_DIFF, MAX_TIME, TIME_INTERVAL } from '@/shared/constants';
import { useRouter } from 'next/navigation';
import { PAGE_ROUTES } from '@/shared/constants/router';

export default function SplashScreen() {
  const router = useRouter();
  const [time, setTime] = useState<Date | null>(null);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setTime(new Date());
    const interval = setInterval(() => setTime(new Date()), TIME_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  if (!time) return null;

  const formatTime = (num: number) => num.toString().padStart(2, '0');
  const hours = formatTime(time.getHours() % MAX_TIME || MAX_TIME);
  const minutes = formatTime(time.getMinutes());
  const seconds = formatTime(time.getSeconds());
  const ampm = time.getHours() >= MAX_TIME ? DATE_DIFF.AM : DATE_DIFF.PM;
  const date = time.toDateString();

  const handleStart = () => {
    setIsExiting(true);
    setTimeout(() => {
      router.push(PAGE_ROUTES.PORTFOLIO);
    }, 400);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center min-h-screen bg-black text-white"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ y: '-100vh', opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-blue-500 to-purple-600 opacity-20 blur-2xl z-0"></div>

          <motion.div
            className="text-5xl font-bold mb-4 tracking-wider text-red-400 uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {date}
          </motion.div>

          <div className="flex space-x-3 text-9xl font-extrabold tracking-wider">
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
              animate={{
                color: ['#00ffff', '#ff4500', '#008080', '#800080'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {minutes}
            </motion.div>
            <motion.div className="text-gray-500">:</motion.div>
            <motion.div
              className="digit"
              animate={{
                color: ['#ffff00', '#ff1493', '#ff4500', '#00ffff'],
              }}
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
            className="mt-16 px-10 py-4 bg-gradient-to-r from-red-600 to-blue-500 text-white text-xl font-extrabold rounded-lg shadow-md tracking-wider uppercase border border-white cursor-pointer z-10"
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleStart}
          >
            Get Started
          </motion.button>

          <style jsx>{`
            .digit {
              text-shadow: 0 0 15px #fff, 0 0 30px #ff00ff, 0 0 45px #00ffff;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
