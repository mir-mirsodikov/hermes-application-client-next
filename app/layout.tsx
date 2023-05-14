import { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { Providers } from './provider';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hermes',
  description: 'Hermes is an open-source learning journey at Next 13.',
  keywords: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  icons: {
    icon: '/hermes-logo.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          montserrat.className +
          ` transition duration-300 ease-in-out flex flex-col justify-between h-screen dark:bg-primary-dark bg-primary-light noise`
        }
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
