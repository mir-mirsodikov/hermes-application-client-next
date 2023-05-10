import { HermesLogo } from './icons';

export function NavigationBar() {
  return (
    <div className='flex justify-between h-20 items-center'>
      <div className='flex flex-row space-x-2 items-center ml-48'>
        <HermesLogo />
        <p className='font-semibold text-gray-800 text-lg'>Hermes</p>
      </div>
      <div>
      </div>
      <div className='mr-48'>
        <button className='font-semibold border text-gray-100 bg-gray-500 px-5 py-2 rounded-md border-gray-400 hover:bg-gray-600'>Log in</button>
      </div>
    </div>
  )
}