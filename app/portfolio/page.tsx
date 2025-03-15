import ControlPanel from '@/components/ControlPanel/ControlPanel';
import InterView from '@/components/InterView/InterView';
import About from '@/components/About/About';
import Project from '@/components/Project/Project';
import ScrollButton from '@/components/ScrollButton/ScrollButton';
import { SESSION_ABOUT, SESSION_PROJECT } from '@/shared/constants';

export const dynamicParams = true;

export default async function PortfolioPage() {
  let projects = [];
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/projects`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch projects: ${res.status} ${res.statusText}`
    );
  }

  const data = await res.json();
  projects = Array.isArray(data) ? data : data.projects || [];

  return (
    <div className="p-5 bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <ControlPanel />
      <InterView />
      <div id={SESSION_ABOUT}>
        <About />
      </div>
      <div id={SESSION_PROJECT}>
        <Project projects={projects} />
      </div>
      <ScrollButton />
    </div>
  );
}
