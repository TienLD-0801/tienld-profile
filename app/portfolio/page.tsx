import ControlPanel from '@/components/ControlPanel/ControlPanel';
import InterView from '@/components/InterView/InterView';
import About from '@/components/About/About';
import Project from '@/components/Project/Project';
import { API_ROUTES } from '@/shared/constants/router';

export default async function PortfolioPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}${API_ROUTES.GET_PROJECT}`,
    {
      cache: 'no-store',
    }
  );

  const { result } = await res.json();

  return (
    <div className="p-5 bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <ControlPanel />
      <InterView />
      <About />
      <Project projects={result} />
    </div>
  );
}
