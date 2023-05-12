'use client';

import { Footer } from '@/components/footer';
import { NavigationBar } from '@/components/nav-bar';
import { Montserrat } from 'next/font/google';
import { useContext, useState } from 'react';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <html lang="en" className={isDarkMode ? 'dark' : ''}>
      <body
        className={
          montserrat.className +
          `transition duration-300 ease-in-out flex flex-col justify-between h-screen dark:bg-primary-dark bg-primary-light`
        }
      >
        <div className="container">
          <NavigationBar
            {...{
              updateTheme: () => {
                setIsDarkMode(!isDarkMode);
                console.log(isDarkMode);
              },
              isDarkMode: isDarkMode,
            }}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
