'use client';

import { SOCIAL_NETWORK_COLOR } from '@/shared/constants';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin } from 'lucide-react';

interface ControlPanelProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}

export default function ControlPanel({
  darkMode,
  setDarkMode,
}: ControlPanelProps) {
  return (
    <div className="flex space-x-4">
      <motion.div className="flex space-x-4 items-center">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="cursor-pointer"
          onClick={() =>
            window.open('https://www.linkedin.com/in/tienld', '_blank')
          }
        >
          <Linkedin color={SOCIAL_NETWORK_COLOR} size={24} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="cursor-pointer"
          onClick={() =>
            window.open(
              'https://www.facebook.com/leduytien0801/?locale=vi_VN',
              '_blank'
            )
          }
        >
          <Facebook color={SOCIAL_NETWORK_COLOR} size={24} />
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="cursor-pointer"
          onClick={() =>
            window.open('https://github.com/TienLD-0801', '_blank')
          }
        >
          <Github color={SOCIAL_NETWORK_COLOR} size={24} />
        </motion.div>
      </motion.div>
      <motion.button
        className="px-3 py-2 bg-gray-800 text-white rounded-full shadow-lg flex items-center space-x-2"
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
    </div>
  );
}
