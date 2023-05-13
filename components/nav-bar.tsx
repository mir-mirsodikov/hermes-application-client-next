'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CloseIcon, HermesLogo, Moon, Sun } from './icons';
import { Button } from './ui/button';
import { useTheme } from 'next-themes';

export function NavigationBar() {
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

  const { theme, setTheme } = useTheme();

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onClose = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div className="flex justify-between h-20 items-center">
      {/* desktop navigation */}
      <div className="md:flex hidden">
        <Link href={'/'} className="flex flex-row space-x-2 items-center mr-24">
          <HermesLogo />
          <p className="font-semibold text-gray-800 dark:text-slate-100 text-lg">
            Hermes
          </p>
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

      {/* mobile navigation */}
      <div
        className="flex items-center md:hidden"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <HermesLogo />
        <p className="text-primary-dark dark:text-primary-light font-semibold text-lg ml-2">
          Menu
        </p>
      </div>
      {isDropdownOpen && (
        <div className="fixed bg-primary-light dark:bg-primary-dark inset-0 p-4 text-primary-dark dark:text-primary-light z-50 flex flex-col items-center">
          <div className="absolute top-10 right-10">
            <CloseIcon onClick={onClose} />
          </div>
          <ul className="w-2/3 m-auto ">
            <div className="flex flex-row space-x-2 items-center m-auto w-1/2 justify-center mb-8">
              <HermesLogo />
              <p className="text-primary-dark dark:text-primary-light font-semibold text-xl ml-2">
                Hermes
              </p>
            </div>
            {routes.map((route) => (
              <li key={route.name} className="text-2xl mb-10">
                <Link href={route.href}>{route.name}</Link>
                <hr className="border border-slate-300 w-full" />
              </li>
            ))}

            <Link href={'/login'}>
              <Button text="Login" type="primary" className="w-full" />
            </Link>
          </ul>
        </div>
      )}

      <div className="flex items-center">
        <div
          className="md:mr-12 cursor-pointer"
          onClick={() => {
            setTheme(theme == 'dark' ? 'light' : 'dark');
          }}
        >
          {theme == 'dark' ? <Moon /> : <Sun />}
        </div>

        <Link href={'/login'} className="hidden md:flex">
          <Button text="Login" type="primary" />
        </Link>
      </div>
    </div>
  );
}
