'use client';

import { Footer } from '@/components/footer';
import { NavigationBar } from '@/components/nav-bar';
import { Montserrat } from 'next/font/google';
import { useEffect, useState } from 'react';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // get system theme preference
    const systemPreference = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    setIsDarkMode(systemPreference);

    // listen for changes on the theme preference
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (e) => {
        setIsDarkMode(e.matches);
      });
  }, []);

  const updateTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

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
              updateTheme,
              isDarkMode,
            }}
          />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
