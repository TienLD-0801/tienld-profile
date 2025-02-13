'use client';

import { motion } from 'framer-motion';

interface ControlPanelProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
  changeLanguage: () => void;
}

export default function ControlPanel({
  darkMode,
  setDarkMode,
  changeLanguage,
}: ControlPanelProps) {
  return (
    <div className="flex space-x-4">
      <motion.button
        className="px-6 py-3 bg-gray-800 text-white rounded-lg shadow-lg flex items-center space-x-2"
        onClick={() => setDarkMode(!darkMode)}
        whileTap={{ scale: 0.9 }}
        animate={{ backgroundColor: darkMode ? '#1e293b' : '#f59e0b' }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ rotate: darkMode ? 180 : 0 }}
          transition={{ duration: 0.5 }}
        >
          🌙
        </motion.span>
      </motion.button>

      <motion.button
        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg flex items-center space-x-2"
        onClick={changeLanguage}
        whileTap={{ scale: 0.9 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          animate={{ rotate: 360 }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'linear' }}
        >
          🌍
        </motion.span>
      </motion.button>
    </div>
  );
}
