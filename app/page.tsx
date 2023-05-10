export default function Home() {
  return (
    <div>
      <h1 className="text-center text-7xl font-semibold w-1/2 m-auto mt-48">
        A Twitter-like clone written in Next
      </h1>
      <p className="text-center text-xl mt-4 w-1/3 m-auto text-gray-500">
        With Next 13 came drastic changes to the framework. This is my attempt
        at learning the ropes.
      </p>
      <div className='flex flex-row justify-center space-x-4 mt-4'>
        <button className='px-5 py-3 rounded-md bg-gray-500 text-white hover:bg-gray-600'>Get Started</button>
        <button className='px-5 py-3 border rounded-md border-gray-400 hover:bg-gray-200'>GitHub</button>
      </div>
    </div>
  );
}
