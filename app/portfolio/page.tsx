'use client';

import ControlPanel from '@/components/ControlPanel/ControlPanel';
import { InterView } from '@/components/InterView/InterView';
import About from '@/components/About/About';
import { Project } from '@/components/Project/Project';

export default function PortfolioPage() {
  return (
    <div className="p-5 bg-white text-black dark:bg-black dark:text-white  overflow-x-hidden">
      <ControlPanel />
      <InterView />
      <About />
      <Project />
    </div>
  );
}
