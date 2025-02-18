'use client';

import {
  DARK_MODE,
  LIGHT_MODE,
  SOCIAL_NETWORK_COLOR,
} from '@/shared/constants';
import { PAGE_ROUTES } from '@/shared/constants/router';
import { motion } from 'framer-motion';
import { Facebook, Github, Linkedin, Moon, Sun, Terminal } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ControlPanel() {
  const router = useRouter();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-3 space-y-4 md:space-y-0">
      <header className="flex justify-center md:justify-start w-full">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => router.push(PAGE_ROUTES.ROOT)}
        >
          <motion.div>
            <Terminal color={SOCIAL_NETWORK_COLOR} size={24} />
          </motion.div>
          <motion.span className="text-2xl font-bold tracking-wide">
            Welcome 🚀
          </motion.span>
        </motion.div>
      </header>

      <motion.div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
        <motion.div className="flex space-x-4">
          {[
            {
              id: 'linkedin',
              icon: Linkedin,
              link: 'https://www.linkedin.com/in/tienld',
            },
            {
              id: 'facebook',
              icon: Facebook,
              link: 'https://www.facebook.com/leduytien0801/?locale=vi_VN',
            },
            {
              id: 'github',
              icon: Github,
              link: 'https://github.com/TienLD-0801',
            },
          ].map(({ id, icon: Icon, link }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.2, rotate: id === 'facebook' ? -5 : 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="cursor-pointer"
              onClick={() => window.open(link, '_blank')}
            >
              <Icon color={SOCIAL_NETWORK_COLOR} size={24} />
            </motion.div>
          ))}
        </motion.div>
        <motion.button
          className="px-3 py-3 bg-gray-800 text-white rounded-full shadow-lg flex items-center space-x-2"
          onClick={() =>
            setTheme(resolvedTheme === DARK_MODE ? LIGHT_MODE : DARK_MODE)
          }
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          animate={{
            backgroundColor:
              resolvedTheme === DARK_MODE ? '#1e293b' : 'rgb(255 181 56)',
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.span
            animate={{ rotate: resolvedTheme === DARK_MODE ? 180 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {resolvedTheme === DARK_MODE ? (
              <Moon size={18} color={SOCIAL_NETWORK_COLOR} />
            ) : (
              <Sun size={18} color={SOCIAL_NETWORK_COLOR} />
            )}
          </motion.span>
        </motion.button>
      </motion.div>
    </div>
  );
}
