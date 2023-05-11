import { HermesLogo } from './icons';
import Link from 'next/link';

export function NavigationBar() {
  const routes = [
    {
      name: 'Features',
      href: '/features'
    },
    {
      name: 'Docs',
      href: '/docs'
    },
  ];

  return (
    <div className="flex justify-between h-20 items-center">
      <div className="flex">
        <Link
          href={'/'}
          className="flex flex-row space-x-2 items-center ml-48 mr-24"
        >
          <HermesLogo />
          <p className="font-semibold text-gray-800 text-lg">Hermes</p>
        </Link>
        <div className="flex items-center space-x-8">
          {routes.map((route) => (
            <Link href={route.href} key={route.name} className='text-gray-400 hover:text-gray-300'>{route.name}</Link>
          ))}
        </div>
      </div>

      <div className="mr-48">
        <Link href={'/login'} className="font-semibold border text-gray-100 bg-gray-500 px-5 py-2 rounded-md border-gray-400 hover:bg-gray-600">
          Log in
        </Link>
      </div>
    </div>
  );
}
