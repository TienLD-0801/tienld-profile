'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown } from 'lucide-react';
import { SOCIAL_NETWORK_COLOR } from '@/shared/constants';

export default function ScrollButton() {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsAtTop(scrollY === 0);
      setIsAtBottom(scrollY + windowHeight >= documentHeight - 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (direction: 'top' | 'bottom') => {
    window.scrollTo({
      top: direction === 'top' ? 0 : document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isAtTop && (
        <motion.button
          className="fixed bottom-5 right-5 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all dark:bg-[#1e293b] dark:text-white z-[100]"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollTo('bottom')}
        >
          <ArrowDown size={24} color={SOCIAL_NETWORK_COLOR} />
        </motion.button>
      )}

      {isAtBottom && (
        <motion.button
          className="fixed bottom-5 right-5 p-3 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-900 transition-all dark:bg-[#1e293b] dark:text-white z-[100]"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollTo('top')}
        >
          <ArrowUp size={24} color={SOCIAL_NETWORK_COLOR} />
        </motion.button>
      )}
    </>
  );
}
