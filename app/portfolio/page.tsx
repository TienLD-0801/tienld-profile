import ControlPanel from '@/components/ControlPanel/ControlPanel';
import InterView from '@/components/InterView/InterView';
import About from '@/components/About/About';
import Project from '@/components/Project/Project';
import axiosClient from '@/services/api';

export default async function PortfolioPage() {
  const { result } = await axiosClient.apiGetProject();

  return (
    <div className="p-5 bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <ControlPanel />
      <InterView />
      <About />
      <Project projects={result} />
    </div>
  );
}
