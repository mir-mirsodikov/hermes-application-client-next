export default function Home() {
  return (
    <div>
      <h1 className="text-center text-7xl font-semibold w-1/2 m-auto">
        A Twitter-like clone built with Next
      </h1>
      <p className="text-center text-xl mt-4 w-1/3 m-auto text-gray-500">
        With Next 13 came drastic changes to the framework. This is my journey
        at learning the ropes.
      </p>
      <div className="flex flex-row justify-center space-x-4 mt-4">
        <button className="px-5 py-3 rounded-md bg-gray-500 text-white hover:bg-gray-600 font-medium">
          Get Started
        </button>
        <button className="px-5 py-3 border rounded-md border-gray-400 hover:bg-gray-300 font-medium">
          GitHub
        </button>
      </div>
    </div>
  );
}
