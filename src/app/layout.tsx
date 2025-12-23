import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { titleApp } from '@/shared';

import '@/shared/styles';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: titleApp,
  description: `${titleApp} Websockets chats and WebRTC calls`
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
