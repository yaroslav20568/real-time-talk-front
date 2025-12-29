import type { Metadata } from 'next';

import { titleApp } from '@/shared';

import '@/app/styles';

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
      <body>{children}</body>
    </html>
  );
}
