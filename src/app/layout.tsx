import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Packing Machine Manufacturer & Exporter | SAM Robotics',
  description: 'SAM Robotics — packing machine manufacturer in Coimbatore. VFFS, Auger Fillers, Blenders & Bottle Filling. ISO & CE certified. Pan-India & 25+ countries.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.Node;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
