'use client';

import Link from 'next/link';
import { useContext, useState } from 'react';
import { HermesLogo, Moon, Sun } from './icons';
import { Button } from './ui/button';

interface NavigationBarProps {
  updateTheme: () => void;
  isDarkMode: boolean;
}

export function NavigationBar({ updateTheme, isDarkMode }: NavigationBarProps) {
  const routes = [
    {
      name: 'Features',
      href: '/features',
    },
    {
      name: 'Docs',
      href: '/docs',
    },
  ];

  return (
    <div className="flex justify-between h-20 items-center">
      <div className="flex">
        <Link
          href={'/'}
          className="flex flex-row space-x-2 items-center mr-24"
        >
          <HermesLogo />
          <p className="font-semibold text-gray-800 dark:text-slate-100 text-lg">Hermes</p>
        </Link>
        <div className="flex items-center space-x-8">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.name}
              className="text-gray-500 dark:text-gray-400 hover:text-gray-400 dark:hover:text-gray-300"
            >
              {route.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center">
        <div
          className="mr-12 cursor-pointer"
          onClick={() => {
            updateTheme();
          }}
        >
          {isDarkMode ? <Moon /> : <Sun />}
        </div>

        <Link
          href={'/login'}
        >
          <Button text="Login" type="primary" />
        </Link>
      </div>
    </div>
  );
}
