import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My Portfolio',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
