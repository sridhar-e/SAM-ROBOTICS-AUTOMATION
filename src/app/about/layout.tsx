import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About SAM Robotics | Packaging Machinery Manufacturer',
  description: 'Coimbatore manufacturer of packaging machinery since 2020. Founded by Senthil. ISO & CE certified. 2,000+ machines delivered across India and 25+ countries.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
