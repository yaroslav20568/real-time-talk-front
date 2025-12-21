import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import '@/shared/styles/globals.scss';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Real-time-talk',
  description: 'Real-time-talk Websockets chats and WebRTC calls'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
